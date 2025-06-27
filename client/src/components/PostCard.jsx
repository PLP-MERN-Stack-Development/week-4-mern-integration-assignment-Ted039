import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
  <div style={{ padding: '1rem', border: '1px solid #ddd', marginBottom: '1rem', borderRadius: '8px' }}>
    <h3>{post.title}</h3>
    <p>{post.excerpt || post.content?.substring(0, 100)}...</p>
    <Link to={`/posts/${post._id}`}>Read More</Link>
  </div>
);

export default PostCard;
