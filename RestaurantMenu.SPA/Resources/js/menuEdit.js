var dotnetnuclear = dotnetnuclear || {};

dotnetnuclear.defaultOptions = {
    moduleId: -1,
    localResources: {},
    dropzoneElemId: 'dropzone'
};

dotnetnuclear.itemViewModel = function (opts) {
    var options = $.extend(dotnetnuclear.defaultOptions, opts);
    var utils = new common.Utils();
    var alert = new common.Alert();
    var parentSelector = options.bindContainer;

    var service = {
        path: "DotNetNuclear.RestaurantMenu.Spa",
        framework: $.ServicesFramework(options.moduleId),
        controller: "Menu"
    }
    service.baseUrl = service.framework.getServiceRoot(service.path);

    var id = ko.observable(-1);
    var name = ko.observable("").extend({ required: true });
    var price = ko.observable(0).extend({ required: true, number: true });
    var description = ko.observable('');
    var imageUrl = ko.observable(options.defaultImage);
    var isDailySpecial = ko.observable(false);
    var isVegetarian = ko.observable(false);
    var isLoading = ko.observable(false);
    var viewUrl = ko.observable('');
    var showErrors = ko.observable(false);
    var showerror = function (item) {
        if (!item.isValid() && showErrors()) {
            return true;
        }
        else
            return false;
    };

    var init = function () {
        var qs = utils.getQueryStrings();
        var itemId = qs["tid"] || 0;
        getItem(itemId);
        initDropZone();

        ko.validation.init({ insertMessages: false, decorateInputElement: false });
    };

    var getItem = function (itemId) {
        var el = "[id*='editmenu-wrap']";
        isLoading(true);

        var params = {
            itemId: itemId
        };

        utils.get("GET", "", service, params,
            function (data) {
                // success
                if (data) {
                    load(data);
                } else {
                    // No data to load 
                    clear();
                }
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

    var load = function (data) {
        id(data.id);
        name(data.name);
        price(data.price);
        if (data.imageUrl && data.imageUrl.length > 0) {
            imageUrl(data.imageUrl);
        }
        description(data.description);
        isDailySpecial(data.isDailySpecial);
        isVegetarian(data.isVegetarian);
        viewUrl(data.viewUrl);
    };

    var save = function () {
        isLoading(true);
        showErrors(true);
        var errors = ko.validation.group(this);

        var params = {
            id: id(),
            name: name(),
            price: price(),
            description: description(),
            imageUrl: imageUrl(),
            isDailySpecial: isDailySpecial(),
            isVegetarian: isVegetarian()
        };

        alert.dismiss({ selector: parentSelector }, function () {
            if (errors().length === 0) {
                utils.get("POST", "", service, params,
                    function (data) {
                        // success
                        if (data) {
                            load(data);
                            cancel();
                        } else {
                            // No data to load 
                            clear();
                        }
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
            } else {
                errors.showAllMessages(true);
            }
        });

    };

    var clear = function () {
        id('');
        name('');
        imageUrl(options.defaultImage);
        price(0);
        description('');
        imageUrl('');
        isDailySpecial(false);
        isVegetarian(false);
    };

    var cancel = function () {
        window.location.href = viewUrl();
    };

    var initDropZone = function () {
        Dropzone.autoDiscover = false;
        $("#" + options.dropzoneElemId).dropzone({
            acceptedFiles: "image/jpeg,image/png,image/gif",
            url: service.baseUrl + "upload/file",
            maxFiles: 1, // Number of files at a time
            maxFilesize: 1, //in MB
            addRemoveLinks: true,
            maxfilesexceeded: function (file) {
                alert(options.localResources.maxfilesMsg);
            },
            success: function (response) {
                var dnnViewResp = response.xhr.responseText;
                var x = JSON.parse(dnnViewResp);
                imageUrl(x.img);
                $('#dropzonemodal').modal('hide'); // On successful upload hide the modal window
                this.removeAllFiles(); // This removes all files after upload to reset dropzone for next upload
            }
        });
    }

    return {
        id: id,
        name: name,
        price: price,
        description: description,
        imageUrl: imageUrl,
        isDailySpecial: isDailySpecial,
        isVegetarian: isVegetarian,
        cancel: cancel,
        load: load,
        save: save,
        init: init,
        isLoading: isLoading,
        showerror: showerror
    };
}
