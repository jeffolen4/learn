describe("testcase", function() {
  it("capitalizes the first letter of a word", function() {
    testcase("cat").should.equal("Cat");
  });

  it("capitalizes the first letter of a word", function() {
    testcase("cat and the hat").should.equal("Cat And The Hat");
  });

  it("capitalizes the first letter of a word", function() {
    testcase("CAT AND THE HAT").should.equal("Cat And The Hat");
  });
});

 describe("compare", function() {
  it("dog and god are anagrams is true", function() {
    compare("dog", "god").should.equal(true);
  });
   it("dog and cat are anagrams is false", function() {
     compare("dog", "cat").should.equal(false);
   });
  it("dog and GOD are anagrams is true", function() {
    compare("dog", "GOD").should.equal(true);
  });

  // test for partial matches too
  it("dog and goddess are anagrams is true", function() {
    compare("dog", "goddess").should.equal(true);
  });

  it("ug and bug are anagrams is true", function() {
    compare("ug", "bug").should.equal(true);
  });

  it("rat and tarp are anagrams is true", function() {
    compare("rat", "tarp").should.equal(true);
  });

});
