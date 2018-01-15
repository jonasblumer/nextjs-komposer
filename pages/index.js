import BlogPostContainer from '../containers/BlogPostContainer';

const Index = () => {
  return (
    <div>
      <h1>hello world</h1>
      <BlogPostContainer />
    </div>
  );
}

// Index.getInitialProps = async function() {
//   const post = {
//     id: 'init',
//     title: 'Initial Data',
//     content: '...now wait a few seconds...',
//   };
//
//   const postData = { post };
//   onData(null, postData)
// }

export default Index;
