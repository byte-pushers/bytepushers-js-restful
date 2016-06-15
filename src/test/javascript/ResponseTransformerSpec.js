define(['BytePushers', 'ResponseTransformer'], function(BytePushers) {
    describe("bytepushers tests", function() {
        it('should defined BytePushers.models.ResponseTransformer.transformJSONResponse', function() {
            expect(BytePushers.models.ResponseTransformer.transformJSONResponse).toBeDefined();
        });
    });
});