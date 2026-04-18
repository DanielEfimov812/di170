// 🌟 Exercise 1: Building A RESTful API

// Instructions

// You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.

// Create a directory named blog-api.

// Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the express package by running npm install express in the terminal.

// Create a file named server.js.

// In server.js, require the express package and set up an Express app.

// Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.

// Implement the following routes using Express:
// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.

// Implement error handling for invalid routes and server errors.

// Start the Express app and listen on a specified port (e.g., 3000).

const express = require("express");
const app = express();
app.use(express.json());

const posts = [
    {
        id: 1,
        title: "First Post",
        content: "This is the content of the first post."
    },
    {
        id: 2,
        title: "Second Post",
        content: "This is the content of the second post."
    },
    {
        id: 3,
        title: "Third Post",
        content: "This is the content of the third post."
    }
];

// module.exports = posts;


// GET /posts: Return a list of all blog posts.
app.get("/posts", (req, res) => {
    res.json(posts)
})

// GET /posts/:id: Return a specific blog post based on its id.
app.get("/posts/:id", (req, res) => {
    const id = req.params.id;
    const post = posts.find((p) => p.id == id);
    if (!post) {
        return res.status(404).send("post not found");
    }
    res.json(post);
})

// POST /posts: Create a new blog post.
app.post("/posts", (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content,
    }
    posts.push(newPost);
    res.status(201).json(newPost);
    // res.send("post created");
})

// PUT /posts/:id: Update an existing blog post.
app.put("/posts/:id", (req, res) => {
    const id = req.params.id;
    const index = posts.findIndex((p) => p.id == id);
    if (index === -1) {
        return res.status(404).send("post not found")
    }
    const updatedPost = {
        ...posts[index],
        ...req.body,
  };
  posts[index] = updatedPost;
  res.status(200).json(updatedPost);
});

// DELETE /posts/:id: Delete a blog post.
app.delete("/posts/:id", (req, res) => {
    const id = req.params.id;
    const index = posts.findIndex((p) => p.id == id);
    if (index === -1) {
        return res.status(404).send("post not found")
    }
    posts.splice(index,1);
    res.status(200).json({ message: "Post deleted successfully" });
})

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error" });
});

app.listen(3000, () => {
    console.log("listen on  port 3000")
});