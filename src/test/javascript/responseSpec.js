define(['BytePushers', 'Response'], function(BytePushers) {
    describe("bytepushers tests", function() {
        it('should defined BytePushers.modules.Response', function () {
            expect(BytePushers.models.ResponseStatus).toBeDefined();
            expect(BytePushers.models.Response).toBeDefined();
        });
    });
    describe("bytepushers tests", function() {
        it('should create BytePushers.modules.Response', function () {
            var responseStatusConfig = {status: "Failure", exception: null};
            var responseStatus = new BytePushers.models.ResponseStatus(responseStatusConfig);
            var response = new BytePushers.models.Response(responseStatus, 'test payload');

            expect(response).toBeDefined();
            expect(response.getPayload()).toBe('test payload');
            expect(response.getStatus()).toBeDefined();
        });
    });
});