import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  
  console.log('Header is rendering...');
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {isAuthenticated && (
          <button onClick={() => dispatch(logout())}>Logout</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
