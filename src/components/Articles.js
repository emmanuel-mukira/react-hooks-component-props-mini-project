import React from 'react';

function Article(props) {
    const date = props.post.date || "January 1, 1970";
    return (
      <article>
        <h3>{props.post.title}</h3>
        <small>{date}</small>
        <p>{props.post.preview}</p>
      </article>
    );
  }

export default Article;
