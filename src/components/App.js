import React from 'react';
import About from './About';
import Header from './Header';
import ArticleList from './ArticleList';

function App() {
  const articles = [
    {
      title: "First article",
      date: "April 1, 2023",
      preview: "This is the preview for the first article.",
    },
    {
      title: "Second article",
      date: "April 2, 2023",
      preview: "This is the preview for the second article.",
    },
    {
      title: "Third article",
      date: "April 3, 2023",
      preview: "This is the preview for the third article.",
    },
  ];

  return (
    <div>
      <Header name="Projects Based Blog" />
      <About
        image="https://example.com/my-image.jpg"
        aboutText="This is some information about my blog."
         />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
