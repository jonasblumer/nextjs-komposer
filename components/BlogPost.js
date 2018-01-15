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
