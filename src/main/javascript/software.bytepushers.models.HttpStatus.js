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
}(BytePushers));