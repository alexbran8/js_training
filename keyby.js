import _ from "lodash"

var posts = [
    { id: "1abc", title: "First blog post", content: "..." },
    { id: "2abc", title: "Second blog post", content: "..." },
    // more blog posts
    { id: "34abc", title: "The blog post we want", content: "..." }
    // even more blog posts
];

posts = _.keyBy(posts, "id");

var post = posts["34abc"]
// post -> { id: "34abc", title: "The blog post we want", content: "..." }

console.log(post)
