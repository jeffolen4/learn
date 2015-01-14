describe('nextWeekday', function() {
  it("should return Jan 13 for Tuesday", function () {
    nextWeekday(2).should.equal("Tue Jan 13 2015");
  })
  it("should return Jan 19 for Monday", function () {
    nextWeekday(1).should.equal("Mon Jan 19 2015");
  })
  

})
