import React from 'react';

class BlogPost extends React.Component {
  render() {
    const {title, content} = this.props.post;
    return (
      <div>
          <h2>{title}</h2>
          <p>{content}</p>
      </div>
    )
  }
};

export default BlogPost;

/*
  WARNING
  const BlogPost = ({ post }) => {
    return (
      <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
      </div>
    )
};

export default BlogPost;
*/
