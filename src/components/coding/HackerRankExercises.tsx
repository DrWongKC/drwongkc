import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const HackerRankExercises = () => {
  const blogPostCodeStringOne = `import { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [count, setCount] = useState(1);
  const [blogPosts, setBlogPosts] = useState([]);

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input
          count={count}
          setCount={setCount}
          blogPosts={blogPosts}
          setBlogPosts={setBlogPosts}
        />
      </div>
      <div className="posts-section">
        <PostDisplay blogPosts={blogPosts} setBlogPosts={setBlogPosts} />
      </div>
    </div>
  );
}

export default Home;`;
  const blogPostCodeStringTwo = `import { useState } from "react";

function Input({ setCount, count, setBlogPosts, blogPosts }) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  function handleTitle(e) {
    setInputTitle(e.target.value);
  }

  function handleDescription(e) {
    setInputDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputTitle == "" || inputDescription == "") {
    } else {
      setCount(count + 1);
      setBlogPosts([
        ...blogPosts,
        {
          id: count,
          title: inputTitle,
          description: inputDescription,
        },
      ]);
    }

    setInputTitle("");
    setInputDescription("");
  }

  return (
    <>
      <div className="layout-column justify-content-center align-items-center">
        <input
          className="w-100"
          type="text"
          placeholder="Enter Title"
          value={inputTitle}
          onChange={handleTitle}
          data-testid="title-input"
        />
        <textarea
          className="mt-10 w-100"
          placeholder="Enter Description"
          value={inputDescription}
          onChange={handleDescription}
          data-testid="description-input"
        />
      </div>
      <button
        data-testid="create-button"
        className="mt-10"
        onClick={handleSubmit}
      >
        Create Post
      </button>
    </>
  );
}

export default Input;`;
  const blogPostCodeStringThree = `function PostDisplay({ blogPosts, setBlogPosts }) {
  function deleteBlogPost(id) {
    setBlogPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== id),
    );
  }

  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {blogPosts.map((blogPost) => (
        <div key={blogPost.id} className="post-box">
          <h3>{blogPost.title + blogPost.id}</h3>
          <p>{blogPost.description}</p>
          <button onClick={() => deleteBlogPost(blogPost.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;`;

  return (
    <div>
      <h2 className="heading">HackerRank Exercises</h2>
      <div>
        <h4>Blog Post [Data Handling]</h4>
        <ol>
          <li>
            The "Blog Post" component should have two input fields: one for the
            post title and another for the post description (textarea).
          </li>
          <li>
            The application should display a "Create" button that, when clicked,
            adds a new blog post to the list of existing posts.
          </li>
          <li>
            The "Create" button should only add a post if both the title and
            description fields have values. If either field is empty, the button
            should not create a post.
          </li>
          <li>
            Once a post is successfully created, both the title and description
            fields should be cleared.
          </li>
          <li>
            The list of created blog posts should be displayed in grid layout,
            with each post appearing inside a box.
          </li>
          <li>
            Each box should include:
            <ul>
              <li>The post's title.</li>
              <li>The post's description</li>
              <li>
                A "Delete" button to remove the specific post from the list.
              </li>
            </ul>
          </li>
        </ol>
        <h4>Preview</h4>
        <div className="flex-container">
          <div className="flex-div">
            <h5>Before:</h5>
            <img
              className="flex-img"
              src={
                "https://i.postimg.cc/Pr06QKgS/screencapture-main-ironpack-hrcdn-net-2026-10-22-18-03-36.png"
              }
            />
          </div>
          <div className="flex-div">
            <h5>After:</h5>
            <img
              className="flex-img"
              src={
                "https://i.postimg.cc/VLjxCTvc/screencapture-main-ironpack-hrcdn-net-2026-10-22-18-30-08.png"
              }
            />
          </div>
        </div>
        <h4>Solution</h4>
        <>
          <h5>Home.js</h5>
          <SyntaxHighlighter language="javascript" style={docco}>
            {blogPostCodeStringOne}
          </SyntaxHighlighter>
          <h5>Input.js</h5>
          <SyntaxHighlighter language="javascript" style={docco}>
            {blogPostCodeStringTwo}
          </SyntaxHighlighter>
          <h5>PostDisplay.js</h5>
          <SyntaxHighlighter language="javascript" style={docco}>
            {blogPostCodeStringThree}
          </SyntaxHighlighter>
        </>
      </div>
      <div>
        <h4>Exercise 2: Problem</h4>
        <ul>
          <li>Implemented efficient algorithms to solve complex problems.</li>
          <li>Optimized code for performance and readability.</li>
        </ul>
        <h4>Exercise 2: Solution</h4>
        <></>
      </div>
    </div>
  );
};

export default HackerRankExercises;
