import { useEffect, useState } from 'react';

// displays the list of user blogs
const Content = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/Posts')
      .then((response) => response.json())
      .then((data) => {
        window.console.log(data);
        return setBlogs(data);
      })
      .catch((error) => window.console.log(error));
  }, []);
  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <h2>{blog.Title}</h2>
          <p>{blog.Content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Content;
