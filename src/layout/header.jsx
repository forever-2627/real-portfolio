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
  const [isScrolled, setIsScrolled] = useState(false);

  const [ isMobile, setIsMobile ] = useState(false);
  const [ isMenu, setIsMenu ] = useState(false);

  useEffect(() => {
   setIsMobile(false);

   const handleClickOutsideMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenu(false);
    }
  };

  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleLogout = () => {
    setIsMenu(false);
    logout()
  };

  const handleClick = () => {
    navigate('myaccount');
    setIsMenu(false);
  }


  return (
    <nav className={`navbar navbar-expand-lg sticky-top py-0 ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="container">
        <Link className="navbar-brand fs-3" to="/">
          <span className="fw-bold" style={{ color: '#ffb6c1' }}>Yun</span>
          <span className="fw-bold text-white">Soft</span>
        </Link>

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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
