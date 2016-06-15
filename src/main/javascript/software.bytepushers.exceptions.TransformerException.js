/*global BytePushers*/
(function (BytePushers) {
    "use strict";
    BytePushers = BytePushers || {};
    BytePushers.exceptions = BytePushers.namespace("software.bytepushers.exceptions");
    BytePushers.exceptions.TransformerException = function (transformerExceptionConfig) {
        var message = (Object.isDefined(transformerExceptionConfig) && Object.isString(transformerExceptionConfig.message)) ? transformerExceptionConfig.message : null,
            exceptionMessages = (Object.isDefined(transformerExceptionConfig) && Object.isArray(transformerExceptionConfig.exceptionMessages)) ? transformerExceptionConfig.exceptionMessages : [],
            name = "BytePushers.exceptions.TransformerException";

        if (Object.isArray(exceptionMessages) && exceptionMessages.length > 0 && Object.isDefined(message)) {
            Error.call(this, message);
        } else if (Object.isArray(exceptionMessages) && exceptionMessages.length > 0) {
            Error.call(this, exceptionMessages[0]);
        } else if (Object.isDefined(message)) {
            Error.call(this, message);
        } else {
            Error.call(this);
        }

        BytePushers.exceptions.TransformerException.prototype = new Error();


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
    BytePushers.exceptions.TransformerException.prototype.toString = function () {
        return this.name + "(" + this.message + ")";
    };
}(BytePushers));