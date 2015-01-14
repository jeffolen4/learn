describe('queenAttack', function() {
  it('is false if the coordinates are not horizontally, vertically, or diagonally in line with each other', function() {
    queenAttack([1, 1], [2, 3]).should.equal(false);
  });

  it('is true if the coordinates are horizontally in line with each other', function() {
    queenAttack([1, 1], [5, 1]).should.equal(true);
  });

  it('is true if the coordinates are vertically in line with each other', function() {
    queenAttack([1, 1], [1, 5]).should.equal(true);
  });

  it('is true if the coordinates are diagonally in line with each other', function() {
    queenAttack([5, 4], [4, 5]).should.equal(true);
  });

  it('is true if the coordinates are diagonally in line with each other', function() {
    queenAttack([4, 5], [1, 8]).should.equal(true);
  });

  it('is true if the coordinates are diagonally in line with each other', function() {
    queenAttack([4, 5], [7, 2]).should.equal(true);
  });

  it('is true if the coordinates are diagonally in line with each other', function() {
    queenAttack([6, 5], [3, 2]).should.equal(true);
  });

  it('is true if the coordinates are diagonally in line with each other', function() {
    queenAttack([4, 1], [1, 4]).should.equal(true);
  });

  it('is false if the coordinates are not horizontally, vertically, or diagonally in line with each other', function() {
    queenAttack([3, 4], [4, 2]).should.equal(false);
  });

  it('is false if the coordinates are off chess board', function() {
    queenAttack([-1, 4], [4, 2]).should.equal(false);
  });

  it('is false if the coordinates are off chess board', function() {
    queenAttack([1, 4], [4, 9]).should.equal(false);
  });



});
