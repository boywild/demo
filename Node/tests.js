var should = chai.should();
describe('should equal 0 when n===0', function() {
    it('should equal 0 when n===0', function() {
        var test = fibonacci(0);
        should.equal(test, 0);
    });
});

// var should = chai.should();

// describe('测试add函数', function() {
//     it('1加1等于2', function() {
//         var sum = add(1, 2);
//         should.equal(sum, 3);
//     });

//     it('1加2等于3', function() {
//         var sum = add(1, 2);
//         should.equal(sum, 3);
//     });
// });
