console.log("Hello world!");

const blogPost = {
    title: "My first blog post",
    author: {
        name: "Bob",
        age: 30,
        favouriteColour: "red",
    },
    tags: ["coding", "javascript", "objects", "arrays"],
    content: "This is my blog post about learning objects and arrays.",

};
console.log(blogPost)
console.log(blogPost.author.name); // Output: Bob
console.log(blogPost.tags[0]); // Output: coding
console.log(blogPost.tags.length); // Output: 4

console.log(`Tags for post "${blogPost.title}":`); // Output: Tags for post "My first blog post":
for (let tag of blogPost.tags) {
    console.log(tag); // Output: coding, javascript, objects, arrays
}