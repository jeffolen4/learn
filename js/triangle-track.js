var appTriangleTrack = appTriangleTrack || {};

appTriangleTrack.triangle = function () {
  this.sides = [0,0,0];
  this.type = "";
  this.findtype = function() {
    if ( this.sides[0] + this.sides[1] <= this.sides[2] ||
      this.sides[1] + this.sides[2] <= this.sides[0] ||
      this.sides[2] + this.sides[0] <= this.sides[1] ) {
      return false;
    } else {
      switch(true) {
        case (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] ):
          this.type = "equilateral";
          break;

        case (  this.sides[0] === this.sides[1] ||
          this.sides[0] === this.sides[2] ||
          this.sides[1] === this.sides[2] ) :
          this.type = "isosceles";
          break;

        default:
          this.type = "scalene"
      }
      return true;
    }
  }
}
