import { useParams } from 'react-router-dom';
import usePostDetail from '../hooks/usePostDetail';

const PostDetail = () => {
  const { id } = useParams();
  const { post, loading } = usePostDetail(id);

  if (loading) return <p>Loading post...</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{post.title}</h2>
      <p><em>Category: {post.category?.name || 'Uncategorized'}</em></p>
      <img src={`/uploads/${post.featuredImage}`} alt="" style={{ maxWidth: '100%' }} />
      <p style={{ marginTop: '1rem' }}>{post.content}</p>
    </div>
  );
};

export default PostDetail;
