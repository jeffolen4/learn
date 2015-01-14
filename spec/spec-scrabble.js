describe('scrabble', function() {

  it('should return the correct value for a single letter.', function() {
    characterValue("a").should.equal(1);
  });

  it('should return the correct value for a single letter.', function() {
    characterValue("h").should.equal(4);
  });

  it('should return the correct value for a single letter.', function() {
    characterValue("x").should.equal(8);
  });

  it('should return the correct value for a single word.', function() {
    wordValue("hello").should.equal(8);
  });

  it('should return the correct value for a single word.', function() {
    wordValue("exit").should.equal(11);
  });

  it('should return the correct value for a single word.', function() {
    wordValue("zoology").should.equal(20);
  });

});
