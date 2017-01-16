var dotnetnuclear = dotnetnuclear || {};

dotnetnuclear.quickSettings = function (root, moduleId) {
    var utils = new common.Utils();
    var alert = new common.Alert();
    var parentSelector = "[id='" + root + "']";

    // Setup your settings service endpoint
    var service = {
        path: "DotNetNuclear.RestaurantMenu.PersonaBar",
        framework: $.ServicesFramework(moduleId),
        controller: "Settings"
    }
    service.baseUrl = service.framework.getServiceRoot(service.path);
    //service.baseUrl = "/DesktopModules/" + service.path + "/API/";

    var CultureOption = function (code, name) {
        this.cultureCode = code;
        this.cultureName = name;
    };

    // Observables
    var allCultures = ko.observableArray([
        new CultureOption("en-US", "US Dollars"),
        new CultureOption("en-GB", "UK Pounds"),
        new CultureOption("de-DE", "German Euro"),
        new CultureOption("ja-JP", "Japanese Yen")
    ]);
    var selectedCulture = ko.observable("en-US");

    var SaveSettings = function () {
        var deferred = $.Deferred();

        var params = {
            currencyCulture: selectedCulture()
        };

        utils.get("POST", "save", service, params,
            function (data) {
                deferred.resolve();
            },
            function (error, exception) {
                // fail
                deferred.reject();
                alert.danger({
                    selector: parentSelector,
                    text: error.responseText,
                    status: error.status
                });
            },
            function () {
            });

        return deferred.promise();
    };

    var CancelSettings = function () {
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    };

    var LoadSettings = function () {
        var params = {};

        utils.get("GET", "load", service, params,
            function (data) {
                selectedCulture(data.currencyCulture);
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
            });
    };

    var init = function () {
        // Wire up the default save and cancel buttons
        $(root).dnnQuickSettings({
            moduleId: moduleId,
            onSave: SaveSettings,
            onCancel: CancelSettings
        });
        LoadSettings();
    }

    return {
        init: init,
        allCultures: allCultures,
        selectedCulture: selectedCulture
    };
};