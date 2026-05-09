// Exercise 2 : Display JSON Data in React JS

// Create a json file, and copy/paste this data.

// Create a component named PostList.js that displays the title and the content of each object from the json file.

// Render the PostList component in your App.js file.

// Expected output (without the grey border):
// image

import posts from "./posts.json";

function PostList() {
  return (
    <>
        <h1>Hi This is a Title</h1>
        {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
      </div>
      ))}
    </>
  );
}

export default PostList;