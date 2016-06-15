var allTestFiles = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            allTestFiles.push(file);
        }
    }
}

require.config({
    baseUrl: '/base',

    paths: {
        'BytePushers': 'bower_components/bytepushers-js-core/release/bytepushers-js-core',
        'TransformerException': 'src/main/javascript/software.bytepushers.exceptions.TransformerException',
        'WebServiceException': 'src/main/javascript/software.bytepushers.exceptions.WebServiceException',
        'HttpStatus': 'src/main/javascript/software.bytepushers.models.HttpStatus',
        'Response': 'src/main/javascript/software.bytepushers.models.Response',
        'ResponseException': 'src/main/javascript/software.bytepushers.models.ResponseException',
        'ResponseStatus': 'src/main/javascript/software.bytepushers.models.ResponseStatus',
        'ResponseTransformer': 'src/main/javascript/software.bytepushers.models.ResponseTransformer',
        'ResponseExceptionStackTrace': 'src/main/javascript/software.bytepushers.ResponseExceptionStackTrace',
        'ResponseResultSetTransformer': 'src/main/javascript/software.bytepushers.ResponseResultSetTransformer',
        'ResponseStatusTransformer': 'src/main/javascript/software.bytepushers.ResponseStatusTransformer'
    },

    shim: {
        'BytePushers': {
            exports: 'BytePushers'
        },
        TransformerException: {
            deps: ['BytePushers']
        },
        WebServiceException: {
            deps: ['BytePushers']
        },
        HttpStatus: {
            deps: ['BytePushers']
        },
        ResponseException: {
            deps: ['BytePushers', 'ResponseExceptionStackTrace']
        },
        ResponseStatus: {
            deps: ['BytePushers']
        },
        Response: {
            deps: ['BytePushers', 'ResponseStatus']
        },
        ResponseTransformer: {
            deps: ['BytePushers', 'HttpStatus', 'ResponseStatus']
        },
        ResponseExceptionStackTrace: {
            deps: ['BytePushers', 'ResponseStatus']
        },
        ResponseResultSetTransformer: {
            deps: ['BytePushers']
        },
        ResponseStatusTransformer: {
            deps: ['BytePushers', 'TransformerException', 'ResponseStatus']
        }
    },

    deps: allTestFiles,

    callback: window.__karma__.start
});
