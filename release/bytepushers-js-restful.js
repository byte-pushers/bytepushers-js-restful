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
}(BytePushers));;/*global BytePushers*/
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
}(BytePushers));;/*global BytePushers*/
(function (BytePushers) {
    "use strict";
    /**
     * Represents the application api.  If the variable is already defined use it,
     * otherwise create an empty object.
     *
     * @type {BytePushers|*|BytePushers|*|{}|{}}
     */
    BytePushers = BytePushers || {};
    /**
     * Represents the application static variable. Use existing static variable, if one already exists,
     * otherwise create a new one.
     *
     * @static
     * @type {*|BytePushers.models|*|BytePushers.models|Object|*|Object|*}
     */
    BytePushers.models = BytePushers.namespace("software.bytepushers.models");
    /**
     * Constructor method for the ResponseStatus Domain Model class.  The properties of this class can be initialized with
     * the jsonResponseStatus Object.
     * @class
     * @classdesc   This class is a domain model class; which means it has both behaviour and state
     *              information about the user.
     * @param {JSON Object}  jsonResponseStatus  Represents the JSON representation of a Response Status object.
     * @constructor
     * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
     */
    BytePushers.models.HttpStatus = BytePushers.enumeration({
        100: {
            name: "Continue",
            value: 100,
            description: "The client SHOULD continue with its request. This interim response is used to inform the client that the initial part of the request has been received and has not yet been rejected by the server. The client SHOULD continue by sending the remainder of the request or, if the request has already been completed, ignore this response. The server MUST send a final response after the request has been completed. See section 8.2.3 for detailed discussion of the use and handling of this status code."
        },
        101: {
            name: "Switching Protocols",
            value: 101,
            description: "The server understands and is willing to comply with the client's request, via the Upgrade message header field (section 14.42), for a change in the application protocol being used on this connection. The server will switch protocols to those defined by the response's Upgrade header field immediately after the empty line which terminates the 101 response.{1}The protocol SHOULD be switched only when it is advantageous to do so. For example, switching to a newer version of HTTP is advantageous over older versions, and switching to a real-time, synchronous protocol might be advantageous when delivering resources that use such features."
        },
        200: {
            name: "OK",
            value: 200,
            description: "The request has succeeded. The information returned with the response is dependent on the method used in the request, for example:{1}GET an entity corresponding to the requested resource is sent in the response;{1}HEAD the entity-header fields corresponding to the requested resource are sent in the response without any message-body;{1}POST an entity describing or containing the result of the action;{1}TRACE an entity containing the request message as received by the end server."
        },
        201: {
            name: "Created",
            value: 201,
            description: "The request has been fulfilled and resulted in a new resource being created. The newly created resource can be referenced by the URI(s) returned in the entity of the response, with the most specific URI for the resource given by a Location header field. The response SHOULD include an entity containing a list of resource characteristics and location(s) from which the user or user agent can choose the one most appropriate. The entity format is specified by the media type given in the Content-Type header field. The origin server MUST create the resource before returning the 201 status code. If the action cannot be carried out immediately, the server SHOULD respond with 202 (Accepted) response instead.{1}A 201 response MAY contain an ETag response header field indicating the current value of the entity tag for the requested variant just created, see section 14.19."
        },
        202: {
            name: "Accepted",
            value: 202,
            description: "The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place. There is no facility for re-sending a status code from an asynchronous operation such as this.{1}The 202 response is intentionally non-committal. Its purpose is to allow a server to accept a request for some other process (perhaps a batch-oriented process that is only run once per day) without requiring that the user agent's connection to the server persist until the process is completed. The entity returned with this response SHOULD include an indication of the request's current status and either a pointer to a status monitor or some estimate of when the user can expect the request to be fulfilled."
        },
        203: {
            name: "Non-Authoritative Information",
            value: 203,
            description: "VA Personal Representative Delegation"
        },
        204: {
            name: "No Content",
            value: 204,
            description: "The server has fulfilled the request but does not need to return an entity-body, and might want to return updated metainformation. The response MAY include new or updated metainformation in the form of entity-headers, which if present SHOULD be associated with the requested variant.{1}If the client is a user agent, it SHOULD NOT change its document view from that which caused the request to be sent. This response is primarily intended to allow input for actions to take place without causing a change to the user agent's active document view, although any new or updated metainformation SHOULD be applied to the document currently in the user agent's active view.{1}The 204 response MUST NOT include a message-body, and thus is always terminated by the first empty line after the header fields."
        },
        205: {
            name: "Reset Content",
            value: 205,
            description: "The server has fulfilled the request and the user agent SHOULD reset the document view which caused the request to be sent. This response is primarily intended to allow input for actions to take place via user input, followed by a clearing of the form in which the input is given so that the user can easily initiate another input action. The response MUST NOT include an entity."
        },
        206: {
            name: "Partial Content",
            value: 206,
            description: "The server has fulfilled the partial GET request for the resource. The request MUST have included a Range header field (section 14.35) indicating the desired range, and MAY have included an If-Range header field (section 14.27) to make the request conditional."
        },
        300: {
            name: "Multiple Choices",
            value: 300,
            description: ""
        },
        301: {
            name: "Moved Permanently",
            value: 301,
            description: ""
        },
        302: {
            name: "Found",
            value: 302,
            description: ""
        },
        303: {
            name: "See Other",
            value: 303,
            description: ""
        },
        304: {
            name: "Not Modified",
            value: 304,
            description: ""
        },
        305: {
            name: "Use Proxy",
            value: 305,
            description: ""
        },
        306: {
            name: "(Unused)",
            value: 306,
            description: ""
        },
        400: {
            name: "Bad Request",
            value: 400,
            description: ""
        },
        401: {
            name: "Unauthorized",
            value: 401,
            description: ""
        },
        402: {
            name: "Payment Required",
            value: 402,
            description: ""
        },
        403: {
            name: "Forbidden",
            value: 403,
            description: ""
        },
        404: {
            name: "Not Found",
            value: 404,
            description: ""
        },
        405: {
            name: "Method Not Allowed",
            value: 405,
            description: ""
        },
        406: {
            name: "Not Acceptable",
            value: 406,
            description: ""
        },
        407: {
            name: "Proxy Authentication Required",
            value: 407,
            description: ""
        },
        408: {
            name: "Request Timeout",
            value: 408,
            description: ""
        },
        409: {
            name: "Conflict",
            value: 409,
            description: ""
        },
        410: {
            name: "Gone",
            value: 410,
            description: ""
        },
        411: {
            name: "Length Required",
            value: 411,
            description: ""
        },
        412: {
            name: "Precondition Failed",
            value: 412,
            description: ""
        },
        413: {
            name: "Request Entity Too Large",
            value: 413,
            description: ""
        },
        414: {
            name: "Request-URI Too Long",
            value: 414,
            description: ""
        },
        415: {
            name: "Unsupported Media Type",
            value: 415,
            description: ""
        },
        416: {
            name: "Requested Range Not Satisfiable",
            value: 416,
            description: ""
        },
        417: {
            name: "Expectation Failed",
            value: 417,
            description: ""
        },
        500: {
            name: "Internal Server Error",
            value: 500,
            description: ""
        },
        501: {
            name: "Not Implemented",
            value: 501,
            description: ""
        },
        502: {
            name: "Bad Gateway",
            value: 502,
            description: ""
        },
        503: {
            name: "Service Unavailable",
            value: 503,
            description: ""
        },
        504: {
            name: "Gateway Timeout",
            value: 504,
            description: ""
        },
        505: {
            name: "HTTP Version Not Supported",
            value: 505,
            description: ""
        }
    });

    //Ask tonté about this code - you have to have the object to get it.
    BytePushers.models.HttpStatus.getStatus = function (status) {
        switch (status) {
        case BytePushers.models.HttpStatus["100"].value:
            return BytePushers.models.HttpStatus["100"];
        case BytePushers.models.HttpStatus["101"].value:
            return BytePushers.models.HttpStatus["101"];
        case BytePushers.models.HttpStatus["200"].value:
            return BytePushers.models.HttpStatus["200"];
        case BytePushers.models.HttpStatus["201"].value:
            return BytePushers.models.HttpStatus["201"];
        case BytePushers.models.HttpStatus["202"].value:
            return BytePushers.models.HttpStatus["202"];
        case BytePushers.models.HttpStatus["203"].value:
            return BytePushers.models.HttpStatus["203"];
        case BytePushers.models.HttpStatus["204"].value:
            return BytePushers.models.HttpStatus["204"];
        case BytePushers.models.HttpStatus["205"].value:
            return BytePushers.models.HttpStatus["205"];
        case BytePushers.models.HttpStatus["206"].value:
            return BytePushers.models.HttpStatus["206"];
        case BytePushers.models.HttpStatus["300"].value:
            return BytePushers.models.HttpStatus["300"];
        case BytePushers.models.HttpStatus["301"].value:
            return BytePushers.models.HttpStatus["301"];
        case BytePushers.models.HttpStatus["302"].value:
            return BytePushers.models.HttpStatus["302"];
        case BytePushers.models.HttpStatus["303"].value:
            return BytePushers.models.HttpStatus["303"];
        case BytePushers.models.HttpStatus["304"].value:
            return BytePushers.models.HttpStatus["304"];
        case BytePushers.models.HttpStatus["305"].value:
            return BytePushers.models.HttpStatus["305"];
        case BytePushers.models.HttpStatus["306"].value:
            return BytePushers.models.HttpStatus["306"];
        case BytePushers.models.HttpStatus["400"].value:
            return BytePushers.models.HttpStatus["400"];
        case BytePushers.models.HttpStatus["401"].value:
            return BytePushers.models.HttpStatus["401"];
        case BytePushers.models.HttpStatus["402"].value:
            return BytePushers.models.HttpStatus["402"];
        case BytePushers.models.HttpStatus["403"].value:
            return BytePushers.models.HttpStatus["403"];
        case BytePushers.models.HttpStatus["404"].value:
            return BytePushers.models.HttpStatus["404"];
        case BytePushers.models.HttpStatus["405"].value:
            return BytePushers.models.HttpStatus["405"];
        case BytePushers.models.HttpStatus["406"].value:
            return BytePushers.models.HttpStatus["406"];
        case BytePushers.models.HttpStatus["407"].value:
            return BytePushers.models.HttpStatus["407"];
        case BytePushers.models.HttpStatus["408"].value:
            return BytePushers.models.HttpStatus["408"];
        case BytePushers.models.HttpStatus["409"].value:
            return BytePushers.models.HttpStatus["409"];
        case BytePushers.models.HttpStatus["410"].value:
            return BytePushers.models.HttpStatus["410"];
        case BytePushers.models.HttpStatus["411"].value:
            return BytePushers.models.HttpStatus["411"];
        case BytePushers.models.HttpStatus["412"].value:
            return BytePushers.models.HttpStatus["412"];
        case BytePushers.models.HttpStatus["413"].value:
            return BytePushers.models.HttpStatus["413"];
        case BytePushers.models.HttpStatus["414"].value:
            return BytePushers.models.HttpStatus["414"];
        case BytePushers.models.HttpStatus["415"].value:
            return BytePushers.models.HttpStatus["415"];
        case BytePushers.models.HttpStatus["416"].value:
            return BytePushers.models.HttpStatus["416"];
        case BytePushers.models.HttpStatus["417"].value:
            return BytePushers.models.HttpStatus["417"];

        case BytePushers.models.HttpStatus["500"].value:
            return BytePushers.models.HttpStatus["500"];
        case BytePushers.models.HttpStatus["501"].value:
            return BytePushers.models.HttpStatus["501"];
        case BytePushers.models.HttpStatus["502"].value:
            return BytePushers.models.HttpStatus["502"];
        case BytePushers.models.HttpStatus["503"].value:
            return BytePushers.models.HttpStatus["503"];
        case BytePushers.models.HttpStatus["504"].value:
            return BytePushers.models.HttpStatus["504"];
        case BytePushers.models.HttpStatus["505"].value:
            return BytePushers.models.HttpStatus["505"];
        default:
            throw new Error("Http Status(" + status + ") is not supported.");

        }
    };
    BytePushers.models.HttpStatus.isNotSuccessful = function (httpStatus) {
        var notSuccessful = false;

        switch (httpStatus) {
        case BytePushers.models.HttpStatus["200"]:
            break;
        case BytePushers.models.HttpStatus["201"]:
            break;
        case BytePushers.models.HttpStatus["202"]:
            break;
        case BytePushers.models.HttpStatus["203"]:
            break;
        case BytePushers.models.HttpStatus["204"]:
            break;
        case BytePushers.models.HttpStatus["205"]:
            break;
        case BytePushers.models.HttpStatus["206"]:
            break;
        default:
            notSuccessful = true;

        }

        return notSuccessful;
    };
    BytePushers.models.HttpStatus.getMessage = function (httpStatus) {
        if (Object.isNumeric(httpStatus)) {
            return BytePushers.models.HttpStatus[httpStatus].getName();
        }

        throw new BytePushers.exceptions.InvalidParameterException("httpStatus('" + httpStatus + "') must be a numeric value.");
    };
}(BytePushers));;/*global BytePushers*/
(function (BytePushers) {
    "use strict";
    /**
     * Represents the application api.  If the variable is already defined use it,
     * otherwise create an empty object.
     *
     * @type {BytePushers|*|BytePushers|*|{}|{}}
     */
    BytePushers = BytePushers || {};
    /**
     * Represents the application static variable. Use existing static variable, if one already exists,
     * otherwise create a new one.
     *
     * @static
     * @type {*|BytePushers.models|*|BytePushers.models|Object|*|Object|*}
     */
    BytePushers.models = BytePushers.models || BytePushers.namespace("software.bytepushers.models");
    /**
     * Constructor method for the Response Domain Model class.  The properties of this class can be initialized with
     * the jsonResponseStatus Object.
     * @class
     * @classdesc   This class is a domain model class; which means it has both behaviour and state
     *              information about the user.
     * @param {BytePushers.models.ResponseStatus}  responseStatus  Represents the Response Status domain model object.
     * @param {Object}  payload  Represents the transformed JSON payload object for a particular service request.
     * @constructor
     *
     * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
     */
    BytePushers.models.Response =  function (responseStatus, payload) {
        if ((responseStatus === undefined) || (responseStatus === null)) {
            throw new BytePushers.exceptions.InvalidParameterException("ResponseStatus can not be null or undefined.");
        }

        /**
         * Convenience method that gets the response message of a service call.
         *
         * @public
         * @method
         * @returns {String} The response message of the service call.
         */
        this.getMessages = function () {
            return responseStatus.getMessages();
        };

        /**
         * Convenience method that gets the response status of a service call.
         *
         * @public
         * @method
         * @returns {BytePushers.models.ResponseStatus} The response status of a service call.
         */
        this.getStatus = function () {
            return responseStatus;
        };

        /**
         * Convenience method that gets the response status exception of a service call.
         *
         * @public
         * @method
         * @returns {Object*} The response status exception of a service call.
         */
        this.getPayload = function () {
            return payload;
        };

        /**
         * Convenience method that determines if the service request call was successful or not.
         *
         * @public
         * @method
         * @returns {Boolean} True if the service request call was successful; otherwise return false.
         */
        this.isSuccessful = function () {
            return (responseStatus.getRequestStatus().toUpperCase() === "SUCCESSFUL");
        };
    };
}(BytePushers));;/*global BytePushers*/
(function (BytePushers) {
    "use strict";
    /**
     * Represents the application api.  If the variable is already defined use it,
     * otherwise create an empty object.
     *
     * @type {BytePushers|*|BytePushers|*|{}|{}}
     */
    BytePushers = BytePushers || {};

    /**
     * Represents the application static variable. Use existing static variable, if one already exists,
     * otherwise create a new one.
     *
     * @static
     * @type {*|BytePushers.models|*|BytePushers.models|Object|*|Object|*}
     */
    BytePushers.models = BytePushers.models || BytePushers.namespace("software.bytepushers.models");
    /**
     * Constructor method for the ResponseException Domain Model class.  The properties of this class can be initialized with
     * the jsonResponseException Object.
     * @class
     * @classdesc   This class is a domain model class; which means it has both behaviour and state
     *              information about the user.
     * @param {String}  jsonResponseException  Represents the JSON representation of a Response Exception object.
     * @constructor
     * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
     */
    BytePushers.models.ResponseException = function (jsonResponseException) {
        /**
         * Represent the cause of the response exception from a Restful service call.
         *
         * @private
         * @field
         * @type {String}
         */
        var cause = (Object.isDefined(jsonResponseException) && Object.isString(jsonResponseException.cause)) ? jsonResponseException.cause : null,
            /**
             * Represent the stackTrace of the response exception from a Restful service call.
             *
             * @private
             * @field
             * @type {BytePushers.models.ResponseExceptionStackTrace}
             */
            stackTrace = [],
            /**
             * Represents the exception code of the response exception for the Restful service call.
             *
             * @private
             * @field
             * @type {String}
             */
            code = (Object.isDefined(jsonResponseException) && Object.isString(jsonResponseException.code)) ? jsonResponseException.code : null;

        if (Object.isDefined(jsonResponseException) && Object.isDefined(jsonResponseException.stackTrace) && Array.isArray(jsonResponseException.stackTrace)) {
            jsonResponseException.stackTrace.forEach(function (jsonStackTrace) {
                stackTrace.push(new BytePushers.models.ResponseExceptionStackTrace(jsonStackTrace));
            });
        }

        /**
         * Convenience method that gets the response exception cause of a service call.
         *
         * @public
         * @method
         * @returns {String} The response exception cause of the service call.
         */
        this.getCause = function () {
            return cause;
        };

        /**
         * Convenience method that gets the response exception stack trace array of a service call.
         *
         * @public
         * @method
         * @returns {BytePushers.models.ResponseExceptionStackTrace[]} The response exception stack trace array of a service call.
         */
        this.getStackTrace = function () {
            return stackTrace;
        };

        /**
         * Convenience method that get the response exception code of the service call.
         * 
         * @public
         * @method
         * @returns {String} The response exception code of a service call.
         */
        this.getCode = function () {
            return code;
        };
    };
}(BytePushers));;/*global BytePushers*/
(function (BytePushers) {
    "use strict";
    /**
     * Represents the application api.  If the variable is already defined use it,
     * otherwise create an empty object.
     *
     * @type {BytePushers|*|BytePushers|*|{}|{}}
     */
    BytePushers = BytePushers || {};
    /**
     * Represents the application static variable. Use existing static variable, if one already exists,
     * otherwise create a new one.
     *
     * @static
     * @type {*|BytePushers.models|*|BytePushers.models|Object|*|Object|*}
     */
    BytePushers.models = BytePushers.models || BytePushers.namespace("software.bytepushers.models");
    /**
     * Constructor method for the ResponseStatus Domain Model class.  The properties of this class can be initialized with
     * the jsonResponseStatus Object.
     * @class
     * @classdesc   This class is a domain model class; which means it has both behaviour and state
     *              information about the user.
     * @param {JSON Object}  jsonResponseStatus  Represents the JSON representation of a Response Status object.
     * @constructor
     * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
     */
    BytePushers.models.ResponseStatus = function (jsonResponseStatus) {
        if ((jsonResponseStatus === undefined) || (jsonResponseStatus === null)) {
            throw new BytePushers.exceptions.InvalidParameterException("jsonResponseStatus can not be null or undefined.");
        }

        var convertResponseMessages = function (jsonMessages, messageType) {
            var msgArray = [], msg;

            jsonMessages.forEach(function (message) {
                // Create a new message object with error type and message from jsonMessages Array.
                if (Object.isString(message)) {
                    msg = new BytePushers.models.Message({type: messageType, value: message});

                    //Put msg object into the msgArray.
                    msgArray.push(msg);
                } else if (message instanceof BytePushers.models.Message) {
                    msgArray.push(message);
                }
            });

            return msgArray;
        },
            convertingArray2 = function (jsonMessages, messageType) {
                var msgArray = [], msg, index, tempMsg = 0;
                //use for loop to loop through the jsonMessages Array.
                for (index = 0; index < jsonMessages.length; index = index + 1) {    //START Loop
                    //Assign index value out of array to a message variable upon each loop.
                    tempMsg = jsonMessages[index];
                    //Create new message object with error Type and messages variable from jsonMsgs Array.
                    msg = new BytePushers.models.Message({type: messageType, value: tempMsg});
                    //Put msg object into the msgArray.
                    msgArray[msgArray.length] = msg;
                } //END Loop
                return msgArray;
            },
            determineMessageType = function (requestStatus) {
                var messageType = (requestStatus.toLowerCase() === "Failure".toLowerCase()) ? BytePushers.models.Message.ERROR : "";
                return messageType;
            },
            /**
             * Represent the response requestStatus from a Restful service call.
             *
             * @private
             * @field
             * @type {String}
             */
            requestStatus = (Object.isDefined(jsonResponseStatus) && Object.isDefined(jsonResponseStatus.status)) ? jsonResponseStatus.status : "Failure",
            /**
             * Represent the response requestStatus message from a Restful service call.
             *
             * @private
             * @field
             * @type {EScreeningDashboardApp.models.Message}
             */

            messages = (Object.isDefined(jsonResponseStatus) && Object.isArray(jsonResponseStatus.messages)) ? convertingArray2(jsonResponseStatus.messages, determineMessageType(requestStatus)) : [],
            /**
             * Represent the response requestStatus exception from a Restful service call.
             *
             * @private
             * @field
             * @type {BytePushers.models.ResponseException}
             */
            exception = (Object.isDefined(jsonResponseStatus) && Object.isDefined(jsonResponseStatus.exception)) ? new BytePushers.models.ResponseException(jsonResponseStatus.exception) : null;

        /**
         * Convenience method that gets the response message of a service call.
         *
         * @public
         * @method
         * @returns {EScreeningDashboardApp.models.Message} The response message of the service call.
         */
        this.getMessages = function () {
            return convertResponseMessages(messages, determineMessageType);
        };

        /**
         * Convenience method that gets the response requestStatus of a service call.
         *
         * @public
         * @method
         * @returns {String} The response requestStatus of a service call.
         */
        this.getRequestStatus = function () {
            return requestStatus;
        };

        /**
         * Convenience method that gets the response requestStatus exception of a service call.
         *
         * @public
         * @method
         * @returns {BytePushers.models.ResponseException} The response requestStatus exception of a service call.
         */
        this.getException = function () {
            return exception;
        };
    };
}(BytePushers));

;/*global BytePushers*/
/*global status*/
(function (BytePushers) {
    "use strict";
    /**
     * Represents the application api.  If the variable is already defined use it,
     * otherwise create an empty object.
     *
     * @type {BytePushers|*|BytePushers|*|{}|{}}
     */
    BytePushers = BytePushers || {};
    /**
     * Represents the application static variable. Use existing static variable, if one already exists,
     * otherwise create a new one.
     *
     * @static
     * @type {*|BytePushers.models|*|BytePushers.models|Object|*|Object|*}
     */
    BytePushers.models = BytePushers.models || BytePushers.namespace("software.bytepushers.models");
    /**
     * Represents the application static variable. Use existing static variable, if one already exists,
     * otherwise create a new one.
     *
     * @static
     * @type {*|BytePushers.models.ResponseTransformer|*|BytePushers.models.ResponseTransformer|Object|*|Object|*}
     */
    BytePushers.models.ResponseTransformer = BytePushers.namespace("software.bytepushers.models.ResponseTransformer");
    /**
     * Static method for the ResponseTransformer class that is responsible for transforming the JSON response.
     *
     * @static
     * @method
     * @param {String} jsonResponse  Represents the JSON response of a Restful service call.
     * @param {Object} httpResponseHeaders Represents the response headers.
     * @param {number} httpResponseStatus Represents the HTTP Status of the request.
     * @param {Transformer} payloadTransformer  Represents the JSON response transformer that is responsible for transforming the JSON Response into the appropriate JavaScript Domain Object Model.
     * @param {Boolean} transformResponseStatus  Optional flag determines if the Transformer should transform the response status.  Response Status are transformed by default.
     * @param {Boolean} transformPayload  Optional flag determines if the Transformer should transform the payload.  Payloads are transformed by default.
     * @returns {BytePushers.models.Response} The response domain model of a service call request.
     *
     * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
     */
    /*jslint unparam: true*/
    BytePushers.models.ResponseTransformer.transformJSONResponse = function (jsonResponse, httpResponseHeaders, httpResponseStatus, payloadTransformer, transformResponseStatus, transformPayload) {
        transformResponseStatus = (Object.isBoolean(transformResponseStatus)) ? transformResponseStatus : true;
        transformPayload = (Object.isBoolean(transformPayload)) ? transformPayload : true;
        /**
         * Represent the response from a Restful service call.
         *
         * @private
         * @field
         * @type {BytePushers.models.Response}
         */
        var response,
            /**
             * Represent the response status from a Restful service call.
             *
             * @private
             * @field
             * @type {BytePushers.models.ResponseStatus}
             */
            responseStatus,
            /**
             * Represent the response payload from a Restful service call.
             *
             * @private
             * @field
             * @type {Object*}
             */
            responsePayload,
            /**
             *
             * @type {BytePushers.models.ResponseStatus}
             */
            httpStatus,
            errorMessage;

        try {
            httpStatus = BytePushers.models.HttpStatus.getStatus(httpResponseStatus);
        } catch (error) {
            errorMessage = error.message;

            try {
                errorMessage = BytePushers.models.HttpStatus.getMessage(httpResponseStatus);
            } catch (invalidParameterException) {
                throw invalidParameterException.toString();
            }

            responseStatus = new BytePushers.models.ResponseStatus({status: "Failure", messages: [errorMessage]});
        }

        if (BytePushers.models.HttpStatus.isNotSuccessful(httpStatus)) {
            responseStatus = new BytePushers.models.ResponseStatus({
                status: "Failure",
                messages: [httpStatus.getName()]
            });
        } else {
            if (transformPayload && !Object.isDefined(payloadTransformer)) {
                throw new BytePushers.exceptions.InvalidParameterException("payloadTransformer can not be null or undefined.");
            }

            if (transformResponseStatus && !Object.isDefined(jsonResponse)) {
                throw new BytePushers.exceptions.InvalidParameterException("jsonResponse can not be null or undefined.");
            }

            if (transformResponseStatus && !Object.isDefined(jsonResponse.status)) {
                throw new BytePushers.exceptions.InvalidParameterException("jsonResponse.status can not be null or undefined.");
            }

            if (transformResponseStatus) {
                if (BytePushers.models.HttpStatus.isNotSuccessful(httpStatus)) {
                    if (Object.isArray(jsonResponse.status.messages)) {
                        jsonResponse.status.messages.push(httpStatus.getMessage());
                    }
                }
                responseStatus = new BytePushers.models.ResponseStatus(jsonResponse.status);
            } else if (BytePushers.models.HttpStatus.isNotSuccessful(httpStatus)) {
                responseStatus = new BytePushers.models.ResponseStatus({
                    status: "Failure",
                    messages: [httpStatus.getMessage(status)]
                });
            }

            if (transformPayload) {
                try {
                    if (Object.isDefined(jsonResponse.payload)) {  //TO_DO: Need to make a Authrizations Transformer or make this one more gerneric to pass in payload wrapper.
                        responsePayload = payloadTransformer.transformJSONPayload(jsonResponse.payload);
                    } else if (!responseStatus) {
                        responsePayload = payloadTransformer.transformJSONPayload(jsonResponse);
                    }
                } catch (exception) {
                    if (exception.getMessage() === BytePushers.models.PDFTransformer.DOCUMENT_NOT_FOUND) {
                        responseStatus = new BytePushers.models.ResponseStatus({
                            status: "Successful",
                            messages: [exception.getMessage()]
                        });
                        responsePayload = new BytePushers.models.PDF();
                    } else {
                        responseStatus = new BytePushers.models.ResponseStatus({
                            status: "Failure",
                            messages: [exception.getMessage()]
                        });
                    }
                }
            }
        }

        if (!responseStatus) {
            responseStatus = new BytePushers.models.ResponseStatus({status: "Successful", messages: []});
        }

        response = new BytePushers.models.Response(responseStatus, responsePayload);

        return response;
    };
    /*jslint unparam: false*/
}(BytePushers));;/*global BytePushers*/
(function (BytePushers) {
    "use strict";
    /**
     * Represents the application api.  If the variable is already defined use it,
     * otherwise create an empty object.
     *
     * @type {BytePushers|*|BytePushers|*|{}|{}}
     */
    BytePushers = BytePushers || {};
    /**
     * Represents the application static variable. Use existing static variable, if one already exists,
     * otherwise create a new one.
     *
     * @static
     * @type {*|BytePushers.models|*|BytePushers.models|Object|*|Object|*}
     */
    BytePushers.models = BytePushers.models || BytePushers.namespace("software.bytepushers.models");
    /**
     * Constructor method for the ResponseExceptionStackTrace Domain Model class.  The properties of this class can be initialized with
     * the jsonResponseExceptionStackTrace Object.
     * @class
     * @classdesc   This class is a domain model class; which means it has both behaviour and state
     *              information about the user.
     * @param {String}  jsonResponseExceptionStackTrace  Represents the JSON representation of a Response Exception object.
     * @constructor
     * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
     */
    BytePushers.models.ResponseExceptionStackTrace = function (jsonResponseExceptionStackTrace) {
        /**
         * Represent the exception stack trace method name.
         *
         * @private
         * @field
         * @type {String}
         */
        var methodName = (Object.isDefined(jsonResponseExceptionStackTrace) && Object.isDefined(jsonResponseExceptionStackTrace.methodName)) ? jsonResponseExceptionStackTrace.methodName : null,
            /**
             * Represent the exception stack trace file name.
             *
             * @private
             * @field
             * @type {String}
             */
            fileName = (Object.isDefined(jsonResponseExceptionStackTrace) && Object.isDefined(jsonResponseExceptionStackTrace.fileName)) ? jsonResponseExceptionStackTrace.fileName : null,
            /**
             * Represents the exception stack trace line number.
             *
             * @private
             * @field
             * @type {Number}
             */
            lineNumber = (Object.isDefined(jsonResponseExceptionStackTrace) && Object.isDefined(jsonResponseExceptionStackTrace.lineNumber)) ? jsonResponseExceptionStackTrace.lineNumber : null,
            /**
             * Represents the exception stack trace class name.
             *
             * @private
             * @field
             * @type {String}
             */
            className = (Object.isDefined(jsonResponseExceptionStackTrace) && Object.isDefined(jsonResponseExceptionStackTrace.className)) ? jsonResponseExceptionStackTrace.className : null,
            /**
             * Represents the exception stack trace class name is a native method or not.
             *
             * @private
             * @field
             * @type {Boolean}
             */
            nativeMethod = (Object.isDefined(jsonResponseExceptionStackTrace) && Object.isDefined(jsonResponseExceptionStackTrace.nativeMethod)) ? jsonResponseExceptionStackTrace.nativeMethod : false;


        /**
         * Convenience method that gets the response exception trace method name.
         *
         * @public
         * @method
         * @returns {String} The method name of the response exception stack trace of the service call.
         */
        this.getMethodName = function () {
            return methodName;
        };

        /**
         * Convenience method that gets the response exception stack trace file name.
         *
         * @public
         * @method
         * @returns {String} The file name of the response exception stack trace of the service call.
         */
        this.getFileName = function () {
            return fileName;
        };

        /**
         * Convenience method that gets the response exception stack trace line number.
         *
         * @public
         * @method
         * @returns {Number} The line number of the response exception stack trace of the service call.
         */
        this.getLineNumber = function () {
            return lineNumber;
        };

        /**
         * Convenience method that gets the response exception stack trace class name.
         *
         * @private
         * @method
         * @returns {String} The class name of the response exception stack trace of the service call.
         */
        this.getClassName = function () {
            return className;
        };

        /**
         * Convenience method that determines if the response exception stack trace class name is a native method.
         *
         * @private
         * @field
         * @returns {Boolean} True if the class name is a native method, otherwise return false.
         */
        this.isNativeMethod = function () {
            return nativeMethod;
        };

        /**
         * Convenience method that overrides the toString method.
         *
         * @returns {string} The string representation of the Exception Stack Trace.
         */
        this.toString = function () {
            return "[\n\tmethodName: " + methodName + ",\n\tfileName: " + fileName + ",\n\tlineNumber: " + lineNumber + ",\n\tclassName: " + className + ",\n\tnativeMethod: " + nativeMethod + "\n]";
        };
    };
    /*jslint unparam: false*/
}(BytePushers));;/*global BytePushers*/
(function (BytePushers) {
    "use strict";
    /**
     * Represents the application api.  If the variable is already defined use it,
     * otherwise create an empty object.
     *
     * @type {BytePushers|*|BytePushers|*|{}|{}}
     */
    BytePushers = BytePushers || {};
    /**
     * Represents the application static variable. Use existing static variable, if one already exists,
     * otherwise create a new one.
     *
     * @static
     * @type {*|BytePushers.models|*|BytePushers.models|Object|*|Object|*}
     */
    BytePushers.models = BytePushers.models || BytePushers.namespace("software.bytepushers.models");
    /**
     * Represents the application static variable. Use existing static variable, if one already exists,
     * otherwise create a new one.
     *
     * @static
     * @type {*|BytePushers.models.ResultSetTransformer|*|BytePushers.models.ResultSetTransformer|Object|*|Object|*}
     */
    BytePushers.models.ResultSetTransformer = BytePushers.namespace("software.bytepushers.models.ResponseResultSetTransformer");
    BytePushers.models.ResultSetTransformer.setContentTransformer = function (contentTransformer) {
        this.contentTransformer = contentTransformer;
    };
    /**
     * Static method for the ResultSetTransformer class that is responsible for transforming the JSON response.
     *
     * @static
     * @method
     * @param {String} resultSetJsonConfig  Represents the JSON response of a Restful service call.
     * @returns {User} The response domain model of a service call request.
     *
     * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
     */
    BytePushers.models.ResultSetTransformer.transformJSONPayload = function (resultSetJsonConfig) {
        /**
         * Represent an existing User.
         *
         * @private
         * @field
         * @type {User}
         */
        var someResultSet = [],
            transformerExceptionMsg;

        if (!Object.isArray(resultSetJsonConfig)) {
            transformerExceptionMsg = "resultSetJsonConfig can not be null or undefined.";
            throw new BytePushers.exceptions.TransformerException({message: transformerExceptionMsg});
        }

        if (!Object.isDefined(this.contentTransformer)) {
            transformerExceptionMsg = "contentTransformer can not be null or undefined.";
            throw new BytePushers.exceptions.TransformerException({message: transformerExceptionMsg});
        }

        try {
            resultSetJsonConfig.forEach(function (resultJsonConfig) {
                someResultSet.push(BytePushers.models.ResultSetTransformer.contentTransformer.transformJSONPayload(resultJsonConfig));
            });
        } catch (exception) {
            transformerExceptionMsg = exception.message;
            throw new BytePushers.exceptions.TransformerException({message: transformerExceptionMsg});
        }

        return someResultSet;
    };
}(BytePushers));;/*global BytePushers*/
(function (BytePushers) {
    "use strict";
    /**
     * Represents the application api.  If the variable is already defined use it,
     * otherwise create an empty object.
     *
     * @type {BytePushers|*|BytePushers|*|{}|{}}
     */
    BytePushers = BytePushers || {};
    /**
     * Represents the application static variable. Use existing static variable, if one already exists,
     * otherwise create a new one.
     *
     * @static
     * @type {*|BytePushers.models|*|BytePushers.models|Object|*|Object|*}
     */
    BytePushers.models = BytePushers.models || BytePushers.namespace("software.bytepushers.models");
    /**
     * Represents the application static variable. Use existing static variable, if one already exists,
     * otherwise create a new one.
     *
     * @static
     * @type {*|BytePushers.models.ResponseStatusTransformer|*|BytePushers.models.ResponseStatusTransformer|Object|*|Object|*}
     */
    BytePushers.models.ResponseStatusTransformer = BytePushers.namespace("software.bytepushers.models.ResponseStatusTransformer");
    /**
     * Static method for the ResponseStatusTransformer class that is responsible for transforming the JSON response status.
     *
     * @static
     * @method
     * @param {String}  jsonResponse  Represents the JSON response of a Restful service call.
     * @returns {BytePushers.models.ResponseStatus} The response status domain model of a service call request.
     *
     * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
     */
    BytePushers.models.ResponseStatusTransformer.transformJSONResponseStatus = function (jsonResponse) {
        /**
         * Represent the response status from a Restful service call.
         *
         * @private
         * @field
         * @type {BytePushers.models.ResponseStatus}
         */
        var responseStatus;

        if (!Object.isDefined(jsonResponse)) {
            throw new BytePushers.exceptions.TransformerException({message: "jsonResponse can not be null or undefined."});
        }

        if (!Object.isDefined(jsonResponse.status)) {
            throw new BytePushers.exceptions.TransformerException({message: "jsonResponse.status can not be null or undefined."});
        }


        responseStatus = new BytePushers.models.ResponseStatus({status: jsonResponse.status});


        return responseStatus;
    };
}(BytePushers));