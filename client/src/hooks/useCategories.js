import { useState, useEffect } from 'react';
import { categoryService } from '../services/api';

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    categoryService.getAllCategories()
      .then((data) => setCategories(data))
      .catch((err) => console.error('Failed to load categories:', err))
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
};

export default useCategories;
