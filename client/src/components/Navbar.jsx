import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#222', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', marginRight: 16 }}>Home</Link>
      {user ? (
        <>
          <Link to="/create" style={{ color: '#fff', marginRight: 16 }}>New Post</Link>
          <button onClick={logout} style={{ color: '#fff' }}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ color: '#fff', marginRight: 16 }}>Login</Link>
          <Link to="/register" style={{ color: '#fff' }}>Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
