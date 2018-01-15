import { compose } from 'react-komposer';
import BlogPost from '../components/BlogPost.js';

function postDataLoader(props, onData) {

  const post = {
    id: props.id,
    title: 'Initial Data',
    content: '...now wait a few seconds...',
  };

  const data = { post };
  onData(null, data)

  // load data from the server. (using props.id to identify the post)
  // (Here'll we'll use setTimeout for demonstration purpose)
  setTimeout(function() {
    const post = {
      id: props.id,
      title: 'Loaded after 3 Sec',
      content: '...now wait a few more seconds...',
    };

    const data = { post };
      // send the data as props to the BlogPost component.
      // So, BlogPost will see the post object as a prop.
      onData(null, data)
  }, 3000);

  setTimeout(function() {
    const post = {
      id: props.id,
      title: 'BOOM',
      content: 'New data loaded and replaced previous.',
    };
    const data = { post };
      onData(null, data)
  }, 8000)
}

const BlogPostContainer = compose(postDataLoader)(BlogPost);

export default BlogPostContainer;
