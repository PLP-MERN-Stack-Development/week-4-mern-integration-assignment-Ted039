import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postService } from '../services/api';
import useCategories from '../hooks/useCategories';

const CreatePost = () => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    category: '',
    featuredImage: null,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { categories } = useCategories();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setForm((prev) => ({ ...prev, featuredImage: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.title || !form.content || !form.category) {
      setError('Please fill in all required fields.');
      return;
    }

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('content', form.content);
    formData.append('category', form.category);
    if (form.featuredImage) {
      formData.append('featuredImage', form.featuredImage);
    }

    try {
      await postService.createPost(formData);
      navigate('/');
    } catch (err) {
      console.error('Post creation failed:', err);
      setError('Failed to create post. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }} encType="multipart/form-data">
      <h2>Create New Post</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      /><br />

      <textarea
        name="content"
        placeholder="Content"
        value={form.content}
        onChange={handleChange}
      /><br />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
      >
        <option value="">Select category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select><br />

      <input
        type="file"
        name="featuredImage"
        accept="image/*"
        onChange={handleChange}
      /><br />

      <button type="submit">Publish</button>
    </form>
  );
};

export default CreatePost;
