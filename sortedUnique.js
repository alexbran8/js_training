import _ from "lodash"

var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
var result = _.sortedUniq(sortedArray);
// -> [1, 2, 3, 5, 8]

console.log(result)
