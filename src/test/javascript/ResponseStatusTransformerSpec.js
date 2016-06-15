define(['BytePushers', 'ResponseStatusTransformer'], function(BytePushers) {
    describe("bytepushers tests", function() {
        it('should defined BytePushers.modules.ResponseStatusTransformer', function () {
            expect(BytePushers.models).toBeDefined();
            expect(BytePushers.models.ResponseStatusTransformer).toBeDefined();
            expect(BytePushers.models.ResponseStatusTransformer.transformJSONResponseStatus).toBeDefined();
        });
    });
    describe("bytepushers tests", function() {
        it('should create BytePushers.modules.ResponseStatusTransformer.transformJSONResponseStatus', function () {
            var responseStatus = BytePushers.models.ResponseStatusTransformer.transformJSONResponseStatus({status: "Successful"});

            expect(responseStatus).toBeDefined();
            expect(responseStatus.getRequestStatus()).toBe('Successful');
        });
    });
});