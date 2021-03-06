var numberwords = appNumWord.numberwords;

describe('numberwords', function() {

  it('should return a number between 0 and 20. Value: 1', function() {
    numberwords("1").should.equal("one");
  });

  it('should return a number between 0 and 20. Value: 11', function() {
    numberwords("11").should.equal("eleven");
  });

  it('should return a number between 0 and 20. Value: 0', function() {
    numberwords("0").should.equal("zero");
  });

  it('should return a number between 21 and 29. Value: 26', function() {
    numberwords("26").should.equal("twenty-six");
  });

  it('should return a number between 21 and 99. Value: 78', function() {
    numberwords("78").should.equal("seventy-eight");
  });

  it('should return a number between 21 and 99. Value: 64', function() {
    numberwords("64").should.equal("sixty-four");
  });

  it('should return a number between 100 and 999. Value: 137', function() {
    numberwords("137").should.equal("one hundred thirty-seven");
  });

  it('should return a number between 1000 and 9999. Value: 1137', function() {
    numberwords("1137").should.equal("one thousand one hundred thirty-seven");
  });

  it('should return a number between 1000 and 9999. Value: 6473', function() {
    numberwords("6473").should.equal("six thousand four hundred seventy-three");
  });

  it('should return a number between 10000 and 99999. Value: 64731', function() {
    numberwords("64731").should.equal("sixty-four thousand seven hundred thirty-one");
  });

  it('should return a number between 10000 and 99999. Value: 19173', function() {
    numberwords("19173").should.equal("nineteen thousand one hundred seventy-three");
  });

  it('should return a number between 100000 and 999999. Value: 159210', function() {
    numberwords("159210").should.equal("one hundred fifty-nine thousand two hundred ten");
  });

  it('should return a number between 100000000 and 999999999. Value: 384159300', function() {
    numberwords("384159300").should.equal("three hundred eighty-four million one hundred fifty-nine thousand three hundred");
  });

  it('should correctly handle embedded zeros. Value: 1000000001', function() {
    numberwords("1000000001").should.equal("one billion one");
  });

  it('should correctly handle embedded zeros. Value: 1000000050', function() {
    numberwords("1000000050").should.equal("one billion fifty");
  });

  it('should correctly handle embedded zeros. Value: 1000000600', function() {
    numberwords("1000000600").should.equal("one billion six hundred");
  });

});
