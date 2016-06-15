define(['BytePushers', 'WebServiceException'], function(BytePushers) {
    describe("bytepushers tests", function() {
        it('should defined BytePushers.exceptions.WebServiceException module', function() {
            expect(BytePushers.exceptions.WebServiceException).toBeDefined();
        });
        it("should throw .exceptions.WebServiceException error", function(){
            expect(function() {throw new BytePushers.exceptions.WebServiceException()}).toThrow();
        });
    });
});