import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(form);
      navigate('/login');
    } catch {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <h2>Register</h2>
      <input name="username" placeholder="Username" value={form.username} onChange={handleChange} /><br />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br />
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} /><br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
