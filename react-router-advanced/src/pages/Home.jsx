import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav style={{ marginTop: '20px' }}>
        <Link to="/login">Login</Link> |{' '}
        <Link to="/profile">Profile</Link> |{' '}
        <Link to="/blog/123">Blog Post</Link>
      </nav>
    </div>
  );
};

export default Home;