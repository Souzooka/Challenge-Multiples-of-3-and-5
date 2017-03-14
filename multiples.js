/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {

  // do your work here
  var sum = 0;
  multiplesArray = [];

  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplesArray.push(i);
    }
  }

  for (let i = 0; i < multiplesArray.length; i++) {
    sum += multiplesArray[i];
  }

  return sum;
};
