import React from 'react'
import MyRouter from './routes';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/custom.scss';
import './styles/bootstrap.scss';
import './styles/styles.scss';
import './styles/font-awesome.scss';
import "aos/dist/aos.css";

function App() {
  return (
    <HelmetProvider>
      <div>
        <ToastContainer />
        <MyRouter />
      </div>
    </HelmetProvider>
  );
}

export default App;
