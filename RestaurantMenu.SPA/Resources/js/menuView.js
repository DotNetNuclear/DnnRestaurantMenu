var dotnetnuclear = dotnetnuclear || {};

dotnetnuclear.defaultOptions = {
    moduleId: -1,
    localResources: {},
    editable: false,
    listContainerElemId: 'menuitems-wrap'
};

dotnetnuclear.itemListViewModel = function (opts) {
    var options = $.extend(dotnetnuclear.defaultOptions, opts);
    var utils = new common.Utils();
    var alert = new common.Alert();
    //var parentSelector = "[id='" + options.bindContainer + "']";
    var parentSelector = options.bindContainer;

    var service = {
        path: "DotNetNuclear.RestaurantMenu.Spa",
        framework: $.ServicesFramework(options.moduleId),
        controller: "Menu"
    }
    service.baseUrl = service.framework.getServiceRoot(service.path);

    var selectedItem = ko.observable();
    var isLoading = ko.observable(false);
    var itemList = ko.observableArray([]);
    var editMode = ko.computed(function () {
        return itemList().length > 0 && itemList()[0].editUrl().length > 0;
    });

    var init = function () {
        getItemList();
    }

    var getItemList = function () {
        isLoading(true);

        var params = {};

        utils.get("GET", "", service, params,
            function (data) {
                // success
                if (data) { load(data); }
                else { itemList.removeAll(); }
            },
            function (error, exception) {
                // fail
                alert.danger({
                    selector: parentSelector,
                    text: error.responseText,
                    status: error.status
                });
            },
            function () {
                // always
                isLoading(false);
            });
    };

    var deleteItem = function () {
        var item = selectedItem();

        if (item.id() > 0 && confirm(options.localResources.deleteConfirm)) {
            isLoading(true);

            var params = { };

            utils.get("DELETE", "?itemId=" + item.id(), service, params,
                function (data) {
                    // success
                    itemList.remove(item);
                },
                function (error, exception) {
                    // fail
                    alert.danger({
                        selector: parentSelector,
                        text: error.responseText,
                        status: error.status
                    });
                },
                function () {
                    // always
                    isLoading(false);
                });
        }
    }

    var load = function (data) {
        itemList.removeAll();
        var underlyingArray = itemList();
        for (var i = 0; i < data.length; i++) {
            var result = data[i];
            var item = new dotnetnuclear.itemViewModel(this);
            item.load(result);
            underlyingArray.push(item);
        }
        itemList.valueHasMutated();
    };

    return {
        init: init,
        load: load,
        itemList: itemList,
        getItemList: getItemList,
        deleteItem: deleteItem,
        editMode: editMode,
        isLoading: isLoading,
        selectedItem: selectedItem
    }
};

dotnetnuclear.itemViewModel = function (parent) {
    var id = ko.observable('');
    var name = ko.observable('');
    var description = ko.observable('');
    var price = ko.observable('');
    var isDailySpecial = ko.observable(false);
    var isVegetarian = ko.observable(false);
    var imageUrl = ko.observable('');
    var editUrl = ko.observable('');
    var editMode = ko.observable(false);

    var load = function (data) {
        id(data.id);
        name(data.name);
        price(data.priceFormatted);
        isDailySpecial(data.isDailySpecial);
        isVegetarian(data.isVegetarian);
        imageUrl(data.imageUrl);
        description(data.description);
        editUrl(data.editUrl);
    };

    return {
        id: id,
        name: name,
        description: description,
        price: price,
        editUrl: editUrl,
        imageUrl: imageUrl,
        load: load,
        //deleteItem: deleteItem,
        editMode: editMode,
        isDailySpecial: isDailySpecial,
        isVegetarian: isVegetarian
    }
}

ko.bindingHandlers.popover = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var attribute = ko.utils.unwrapObservable(valueAccessor());
        var popOverTemplate = "<div class='popOverClass' id='" + attribute.id + "-popover'>" + $(attribute.content).html() + "</div>";
        //var cssSelectorForPopoverTemplate = ko.utils.unwrapObservable(valueAccessor());
        //var popOverTemplate = $(cssSelectorForPopoverTemplate).html();
        $(element).popover({
            html: true,
            trigger: 'click',
            placement: "bottom",
            content: popOverTemplate,
            title: function () {
                return $(this).parent().find('.head').html();
            },
            //content: function () {
            //    return $(this).parent().find('.content').html();
            //},
            //template: '<div id="' + attribute.id + '-popover" class="popover edit-popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"></div></div></div>'
        });
        $(element).parent().attr('data-itemid', attribute.id);
        $(element).click(function () {
            // bind the dynamic popover elements to the viewmodel
            var thePopover = document.getElementById(attribute.id + "-popover");
            //var childBindingContext = bindingContext.createChildContext(bindingContext.$parent);
            bindingContext.$parent.selectedItem(viewModel);
            ko.applyBindingsToDescendants(bindingContext.$parent, thePopover);
        });
    },
};