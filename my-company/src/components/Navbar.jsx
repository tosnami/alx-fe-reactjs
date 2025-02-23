import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <nav>
        <Link to="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/services" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Services</Link>
        <Link to="/contact" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
