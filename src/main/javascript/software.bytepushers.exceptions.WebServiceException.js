/*global BytePushers*/
(function (BytePushers) {
    "use strict";
    BytePushers = BytePushers || {};
    BytePushers.exceptions = BytePushers.namespace("software.bytepushers.exceptions");
    BytePushers.exceptions.WebServiceException = function (webServiceExceptionConfig) {
        var message = (Object.isDefined(webServiceExceptionConfig) && Object.isDefined(webServiceExceptionConfig.message)) ? webServiceExceptionConfig.message : null,
            exceptionMessages = (Object.isDefined(webServiceExceptionConfig) && Object.isArray(webServiceExceptionConfig.exceptionMessages)) ? webServiceExceptionConfig.exceptionMessages : [],
            name = "BytePushers.exceptions.WebServiceException";

        if (Object.isArray(exceptionMessages) && exceptionMessages.length > 0 && Object.isDefined(message)) {
            Error.call(this, message);
        } else if (Object.isArray(exceptionMessages) && exceptionMessages.length > 0) {
            Error.call(this, exceptionMessages[0]);
            message = exceptionMessages[0];
        } else if (Object.isDefined(message)) {
            Error.call(this, message);
        } else {
            Error.call(this);
        }

        BytePushers.exceptions.WebServiceException.prototype = new Error();

        this.getName = function () {
            return name;
        };

        this.getMessage = function () {
            return message;
        };

        this.getMessages = function () {
            return exceptionMessages;
        };
    };
}(BytePushers));