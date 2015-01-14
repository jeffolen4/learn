

 describe('getWordsUsageCount', function() {

  it("should return the associative array showing the words and counts", function() {
    expect( getWordsUsageCount(["cat", "dog", "dog"], "cat dog dog")).to.deep.equal({ cat: 1, dog: 2 });
    // getWordsUsageCount(["cat", "dog", "dog"], "cat dog dog").assert.deepEqual({ cat: 1, dog: 2 })
  })

  it("should return the associative array showing the words and counts - three elements", function() {
    expect( getWordsUsageCount(["cat", "dog", "dog", "bird","bird"], "cat dog dog bird bird")).to.deep.equal({ cat: 1, dog: 2, bird: 2 });
  })

})

describe('sortByTimesUsed', function() {

  it("should correctly handle an empty string", function () {
    sortByTimesUsed("").should.equal("");
  })

  it("should correctly handle an invalid value e.g. number etc...", function () {
    sortByTimesUsed(1234).should.equal(false);
  })

  it("should return the most used word first", function () {
    sortByTimesUsed("dog cat cat bird bird girl girl").should.equal("cat bird girl dog");
  })

  it("if used same number of times order by first appearance.", function () {
    sortByTimesUsed("dog dog cat cat").should.equal("dog cat");
  })

  it("should return the least used word last.", function () {
    sortByTimesUsed("dog dog sheep cat cat").should.equal("dog cat sheep");
  })

})
