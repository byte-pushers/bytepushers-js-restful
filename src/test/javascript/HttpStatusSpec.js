define(['BytePushers', 'HttpStatus'], function(BytePushers) {
    describe("bytepushers tests", function() {
        it('should defined BytePushers.modules.HttpStatus', function() {
            expect(BytePushers.models.HttpStatus).toBeDefined();
        });
        it('should defined specific BytePushers.modules.HttpStatus enum', function() {
            expect(BytePushers.models.HttpStatus["404"]).toBeDefined();
        });
        it('should succesfully call BytePushers.modules.HttpStatus.getStatus()', function() {
            var value = BytePushers.models.HttpStatus["203"].value;
            expect(BytePushers.models.HttpStatus.getStatus(value)).toBeDefined();
        });
        it('should succesfully call BytePushers.modules.HttpStatus.isNotSuccessful()', function() {
            var notFound = BytePushers.models .HttpStatus["404"].value;
            var OK = BytePushers.models.HttpStatus["200"];
            expect(BytePushers.models.HttpStatus.isNotSuccessful(notFound)).toBe(true);
            expect(BytePushers.models.HttpStatus.isNotSuccessful(OK)).toBe(false);
        });
        it('should succesfully call BytePushers.modules.HttpStatus.getMessage()', function() {
            expect(BytePushers.models.HttpStatus.isNotSuccessful(304)).toBe(true);
        });
    });
});