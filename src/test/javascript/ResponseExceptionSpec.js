define(['BytePushers', 'ResponseException'], function(BytePushers) {
    describe("bytepushers tests", function() {
        it('should defined BytePushers.models.ResponseException', function () {
            expect(BytePushers.models).toBeDefined();
            expect(BytePushers.models.ResponseException).toBeDefined();
        });
    });
    describe("bytepushers tests", function() {
        it('should create BytePushers.models.ResponseException', function () {
            var exception = new BytePushers.models.ResponseException({cause: null, stackTrack: []});

            expect(exception).toBeDefined();
            expect(exception.getCause()).toBe(null);
            expect(exception.getStackTrace().length).toBe(0);
        });
    });
});
