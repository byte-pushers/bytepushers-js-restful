/*global BytePushers*/
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

