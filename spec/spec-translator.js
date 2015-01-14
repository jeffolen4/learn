describe('translate', function() {

  it('should return with the first consonant followed by "ay" if starts with a single consonant', function() {
    translateWord("word").should.equal("ordway");
  });

  it('should return with the first two consonants followed by "ay" if starts with a two consonants', function() {
    translateWord("shall").should.equal("allshay");
  });

  it('should return with "ay" appended if starts with a vowel.', function() {
    translateWord("ouch").should.equal("ouchway");
  });


  it('should function correctly with "qu" as the first two characters.', function() {
    translateWord("quack").should.equal("ackquay");
  });

  it('should function correctly with "qu" preceded by a consonant as the first three characters.', function() {
    translateWord("squall").should.equal("allsquay");
  });


  it('should return correctly translated paragraph.', function() {
    translateString("test ouch car medical stuff ruff bells dwells").should.equal("esttay ouchway arcay edicalmay uffstay uffray ellsbay ellsdway");
  });


});
