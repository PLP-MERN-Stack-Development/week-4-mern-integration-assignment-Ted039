import { useState, useEffect } from 'react';
import { postService } from '../services/api';

const usePostDetail = (idOrSlug) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!idOrSlug) return;

    postService.getPost(idOrSlug)
      .then((data) => setPost(data))
      .catch((err) => {
        console.error('Failed to fetch post detail:', err);
        setPost(null);
      })
      .finally(() => setLoading(false));
  }, [idOrSlug]);

  return { post, loading };
};

export default usePostDetail;
