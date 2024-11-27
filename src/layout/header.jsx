import React, { useEffect, useState, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
import { SM_PRIMARY_BUTTON } from '../constant';
import MenuIcon from '../components/modals/menu.svg';

export default function Header() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  const [ isMobile, setIsMobile ] = useState(false);
  const [ isMenu, setIsMenu ] = useState(false);

  useEffect(() => {
   setIsMobile(false);

   const handleClickOutsideMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenu(false);
    }
  };

  document.addEventListener('click', handleClickOutsideMenu);

  return () => {
    document.removeEventListener('click', handleClickOutsideMenu);
  };

  }, [location]);

  const handleLogout = () => {
    setIsMenu(false);
    logout()
  };

  const handleClick = () => {
    navigate('myaccount');
    setIsMenu(false);
  }


  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={`/img/logo.png`} className='nav-logo'/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#solutions">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#details">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#details">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#expertise">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
