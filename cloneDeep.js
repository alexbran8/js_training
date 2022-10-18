import _ from "lodash"

var original = { foo: "bar" };
var copy = original;
copy.foo = "new value";
// copy -> { foo: "new value" } Yeah!
// original -> { foo: "new value" } Oops!

var original = { foo: "bar" };
var copy = _.cloneDeep(original);
copy.foo = "new value";
// copy -> { foo: "new value" } Yeah!
// original -> { foo: "bar" } Yeah!

console.log('original:', original)
console.log('copy:', copy)

