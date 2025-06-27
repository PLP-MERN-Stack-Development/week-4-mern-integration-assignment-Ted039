import usePosts from '../hooks/usePosts';
import PostCard from '../components/PostCard';

const Home = () => {
  const { posts, loading, error } = usePosts();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>All Blog Posts</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Home;
