import _ from "lodash"

function getRandomNumber() {
    return Math.round(Math.random() * 100);
}

var result = _.times(5, getRandomNumber);
console.log(result)
// result => [64, 70, 29, 10, 23]
