define(['BytePushers', 'TransformerException'], function(BytePushers) {
    describe("bytepushers tests", function() {
        it('should defined BytePushers.exceptions.TransformerException module', function() {
            expect(BytePushers.exceptions.TransformerException).toBeDefined();
        });

        it("should throw exceptions.TransformerException error", function(){
            expect(function() {throw new BytePushers.exceptions.TransformerException()}).toThrow();
        });
    });
});