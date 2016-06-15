/*global BytePushers*/
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
}(BytePushers));