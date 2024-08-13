import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
     
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: 0 }}>
            <li style={{ margin: '0 15px' }}><Link to="/">All</Link></li>
            <li style={{ margin: '0 15px' }}><Link to="/fullstack">Full Stack Development</Link></li>
            <li style={{ margin: '0 15px' }}><Link to="/datascience">Data Science</Link></li>
            <li style={{ margin: '0 15px' }}><Link to="/cybersecurity">Cyber Security</Link></li>
            <li style={{ margin: '0 15px' }}><Link to="/career">Career</Link></li>
            <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
