function countLeaves( obj ) {
  var count=0;

  switch( obj.constructor ) {
    case Array:
      return countLeavesArray( obj );
    case Object:
      return countLeavesObj( obj );
    default:
      count++;
  }
  return count;
}

function countLeavesArray( array ) {
  var count=0;

  array.forEach( function (item) {
    switch( item.constructor ) {
      case Array:
        count += countLeavesArray( item );
        break;
      case Object:
        count += countLeavesObj( item );
        break;
      default:
        count++;
    };
  });
  return count;
}

function countLeavesObj( obj ) {
  var count=0;

  $.each(obj, function (key, item) {
    switch( item.constructor ) {
      case Array:
        count += countLeavesArray( item );
        break;
      case Object:
        count += countLeavesObj( item );
        break;
      default:
        count++;
    };
  });
  return count;
}
