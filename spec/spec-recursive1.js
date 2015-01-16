describe('recursion1', function() {

  it('should return count for a simple array. Value: 5', function() {
    countLeaves(["1","2","3","4","5"]).should.equal(5);
  });

  it('should return count for a simple object. Value: 4', function() {
    countLeaves({"fname": "jeff", "lname":"olen", "age":46, "address":"120 Cristianitos Rd"}).should.equal(4);
  });


  it('should return count for a complex array. Value: 9', function() {
    countLeaves([ ["1","9"], ["2","6"], "3", ["4","7","8"], "5"]).should.equal(9);
  });


  it('should return count for a complex object. Value: 8', function() {
    countLeaves({"item1":[ ["1","9"], ["2","6"] ], "item2":"3", "item4":{ age:"4", "names":["7","8"] } }).should.equal(8);
  });

})
