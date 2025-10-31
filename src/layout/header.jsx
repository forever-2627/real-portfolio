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
    <nav className={`navbar navbar-expand-lg fixed-top py-0 ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`} style={{ zIndex: 1050 }}>
      <div className="container-fluid container-lg">
        <Link className="navbar-brand fs-3 fs-md-4" to="/">
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
          onClick={() => setIsMenu(!isMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenu ? 'show' : ''}`} id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto text-center text-md-start">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsMenu(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={() => setIsMenu(false)}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs" onClick={() => setIsMenu(false)}>
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setIsMenu(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsMenu(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
