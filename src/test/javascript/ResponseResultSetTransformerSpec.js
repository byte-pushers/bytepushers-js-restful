define(['BytePushers', 'ResponseResultSetTransformer'], function(BytePushers) {
    describe("bytepushers tests", function() {
        it('should defined BytePushers.exceptions.ResponseResultSetTransformer module', function() {
            expect(BytePushers.models).toBeDefined();
            expect(BytePushers.models.ResponseResultSetTransformer).toBeDefined();
        });
    });
});