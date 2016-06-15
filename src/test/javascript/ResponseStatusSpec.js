define(['BytePushers', 'ResponseStatus'], function(BytePushers) {
    describe("bytepushers tests", function() {
        it('should defined BytePushers.models.ResponseStatus', function () {
            expect(BytePushers.models.ResponseStatus).toBeDefined();
        });
    });
    describe("bytepushers tests", function() {
        it('should create BytePushers.models.ResponseStatus', function () {
            var responseStatusConfig = {status: "Failure", exception: null};
            var responseStatus = new BytePushers.models.ResponseStatus(responseStatusConfig);
            expect(responseStatus).toBeDefined();
            expect(responseStatus.getRequestStatus()).toBe("Failure");
        });
    });
});