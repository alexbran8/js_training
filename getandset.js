import _ from "lodash"


var bar = { foo: { key: "foo" } };
_.set(bar, "foo.items[0]", "An item");
// bar => { foo: { key: "foo", items: ["An item"] } }
var name = _.get(bar, "name", "John Doe");
// name => John Doe

console.log(name)