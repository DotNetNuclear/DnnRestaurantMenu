var common = common || {};

common.Utils = function () {

    var get = function (httpMethod, action, service, params, success, fail, always) {
        var jqxhr = $.ajax({
            url: service.baseUrl + service.controller + "/" + action,
            beforeSend: service.framework.setModuleHeaders,
            type: httpMethod,
            async: true,
            data: httpMethod == "GET" ? params : JSON.stringify(params),
            dataType: httpMethod == "GET" ? "" : "json",
            contentType: httpMethod == "GET" ? "" : "application/json; charset=UTF-8"
        }).done(function (data) {
            if (typeof (success) === "function") {
                success(data);
            }
        }).fail(function (error, exception) {
            if (typeof (fail) === "function") {
                fail(error, exception);
            }
        }).always(function () {
            if (typeof (always) === "function") {
                always();
            }
        });
    };

    var addRewriteQueryString = function (hash, decode) {
        var path = location.pathname;
        var queryString = path.substring(path.search("/ctl/") + 1);
        var keyValues = queryString.split("/");

        for (var i = 0; i < keyValues.length; i += 2) {
            hash[decode(keyValues[i])] = decode(keyValues[i + 1]);
        }
        return hash;
    };

    var getQueryStrings = function () {
        var assoc = {};
        var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
        var queryString = location.search.substring(1);
        var keyValues = queryString.split("&");

        for (var i = 0; i < keyValues.length; i++) {
            var key = keyValues[i].split("=");
            if (key.length > 1) {
                assoc[decode(key[0])] = decode(key[1]);
            }
        }
        return addRewriteQueryString(assoc, decode);
    };

    var loading = function (icon, cssClass) {
        $(icon).toggleClass(cssClass).toggleClass("fa-refresh fa-spin");
    };

    return {
        get: get,
        getQueryStrings: getQueryStrings,
        addRewriteQueryString: addRewriteQueryString,
        loading: loading
    };
};


common.Alert = function () {

    var success = function (message) {
        message.redirect = typeof (message.redirect) !== "undefined" ? message.redirect : false;

        $("<div class='alert alert-success alert-panel' style='display:none;'>" + message.text + "</div>")
            .appendTo($(message.selector))
            .slideDown(800, function () {
                if (message.redirect) {
                    setTimeout(function () {
                        location.href = typeof (message.postBack) !== "undefined" ? message.postBack : "/";
                    }, 3000);
                }
            });
    };

    var info = function (message) {
        message.redirect = typeof (message.redirect) !== "undefined" ? message.redirect : false;

        $("<div class='alert alert-danger alert-panel' style='display:none;'>" + message.text + "</div>")
            .appendTo($(message.selector))
            .slideDown(800, function () {
                if (message.redirect) {
                    setTimeout(function () {
                        location.href = typeof (message.postBack) !== "undefined" ? message.postBack : "/";
                    }, 3000);
                }
            });
    };

    var warning = function (message) {
        message.redirect = typeof (message.redirect) !== "undefined" ? message.redirect : false;

        $("<div class='alert alert-warning alert-panel' style='display:none;'>" + message.text + "</div>")
            .appendTo($(message.selector))
            .slideDown(800, function () {
                if (message.redirect) {
                    setTimeout(function () {
                        location.href = typeof (message.postBack) !== "undefined" ? message.postBack : "/";
                    }, 3000);
                }
            });
    };

    var danger = function (message) {
        message.redirect = typeof (message.redirect) !== "undefined" ? message.redirect : false;

        $("<div class='alert alert-danger alert-panel' style='display:none;'>" + message.text + "</div>")
            .prependTo($(message.selector))
            .slideDown(800, function () {
                if (message.redirect) {
                    setTimeout(function () {
                        location.href = typeof (message.postBack) !== "undefined" ? message.postBack : "/";
                    }, 3000);
                }
            });
    };

    var dismiss = function (alert, callback) {
        var alertPanel = $(alert.selector).find(".alert-panel");

        $.each(alertPanel, function (index, el) {

            $(el).slideUp(800, function () {
                $(el).remove();

                if (typeof (callback) === "function") {
                    callback();
                }
            });
        });

        if (alertPanel.length == 0 && typeof (callback) === "function") {
            callback();
        }
    };

    return {
        success: success,
        info: info,
        warning: warning,
        danger: danger,
        dismiss: dismiss
    };
};