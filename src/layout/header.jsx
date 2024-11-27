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
    <div className='bg-white w-full py-4'>
      <div className='container px-4 mx-auto flex flex justify-between items-center'>
        <div className='page-log'>
          <a href='https://www.hideadline.com'>
            <img src={`/img/logo.png`} className='h-10' alt='page logo' />
          </a>
        </div>
        <nav>
          <ul className='md:flex hidden gap-4'>
            {
              !isAuthPage && token ? <>
                <li><Link className='text-xl' to={`/dashboard`}>Dashboard</Link></li>
                <li><Link className='text-xl' to={`/create`}>Create a Deadline</Link></li>
                <li className='relative' ref={menuRef}>
                  <img src={MenuIcon} onClick={(e) => setIsMenu((prevState) => !prevState) } className='w-7 cursor-pointer' alt='menu icon' />
                  {
                    isMenu ? <div className='flex flex-col items-start gap-2 py-6 w-52 absolute px-6 md:px-8 text-center justify-center absolute right-0 top-14 bg-white'>
                      <button onClick={handleClick}>Account</button>
                      <button onClick={handleLogout}>Logout</button>
                    </div> : null
                  }
                </li>
              </> : <>
              <li><Link className='text-xl' to={`/login`}>Login</Link></li>
              </>
            }
          </ul>
          <button className='md:hidden bg-[#A5B1BF] w-10 h-10 text-white text-xl' onClick={() => setIsMobile(!isMobile)}>
            &#9776;
          </button>
          
        </nav>
      </div>
      {
        isMobile && <div className='px-2 md:hidden grid grid-cols-2 gap-4 mt-4 justify-center items-center'>
          {
            !isAuthPage && token ? <>
              <Link className={`${SM_PRIMARY_BUTTON} text-center`} to={'/dashboard'}>View Deadline</Link>
              <Link className={`${SM_PRIMARY_BUTTON} text-center`} to={'/create'}>Create Deadline</Link>
              <button className={SM_PRIMARY_BUTTON} onClick={handleClick}>Account</button>
              <button className={`${SM_PRIMARY_BUTTON} bg-[rgb(180,192,205)]`} onClick={handleLogout}>Logout</button>
            </> : <Link className={`${SM_PRIMARY_BUTTON}`} to={'/login'}>Login</Link>
          }
          
        </div>
      }
        
    </div>
  )
}
