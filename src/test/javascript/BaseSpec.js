define(['BytePushers'], function(BytePushers) {
    describe("bytepushers tests", function() {
        it('should defined BytePushers module', function() {
            expect(BytePushers).toBeDefined();
        });

        it('should defined BytePushers.exceptions module', function() {
            expect(BytePushers.exceptions).toBeDefined();
        });

        it("should recognize an array", function(){
            var array = [1, 2, 3, 4];
            expect(BytePushers.isArrayLike(array)).toEqual(true);
        });
    });
});