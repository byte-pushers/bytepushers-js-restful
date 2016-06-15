define(['BytePushers', 'ResponseException'], function(BytePushers) {
    describe("bytepushers tests", function() {
        it('should defined BytePushers.models.ResponseExceptionStackTrace', function () {
            expect(BytePushers.models).toBeDefined();
            expect(BytePushers.models.ResponseExceptionStackTrace).toBeDefined();
        });
    });
    describe("bytepushers tests", function() {
        it('should create BytePushers.models.ResponseExceptionStackTrace', function () {
            var stackTrace = new BytePushers.models.ResponseExceptionStackTrace({methodName: 'testMethod', fileName: 'test.js', lineNumber: 24, className: "testClass", nativeMethod: false});

            expect(stackTrace).toBeDefined();
            expect(stackTrace.getMethodName()).toBe('testMethod');
            expect(stackTrace.getFileName()).toBe('test.js');
            expect(stackTrace.getLineNumber()).toBe(24);
            expect(stackTrace.isNativeMethod()).toBe(false);
        });
    });
});
