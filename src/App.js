import React from 'react'
import MyRouter from './routes';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/custom.scss';
import './styles/bootstrap.scss';
import './styles/styles.scss';
import './styles/font-awesome.scss';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hi Deadline - Home</title>
        <meta
          name="description"
          content="Hi Deadline App"
        />
      </Helmet>
      <div>
        <ToastContainer />
        <MyRouter />
      </div>
    </HelmetProvider>
  );
}

export default App;
