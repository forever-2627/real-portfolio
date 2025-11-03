import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute'
import PageLayout from '../layout'
import ScrollToTop from '../components/ScrollToTop.jsx'

import LoginPage from '../containers/login'
import RegisterPage from '../containers/register'

import CreateDeadlinePage from '../containers/projects/createDeadline'
import CreateProjectPage from '../containers/projects/createProject'
import CreateProjectWithoutLogin from '../containers/projects/createProjectWithoutLogin'
import EditDeadlinePage from '../containers/projects/editDeadline'
import EditProjectPage from '../containers/projects/editProject'
import DetailDeadlinePage from '../containers/projects/detailDeadline'
import ProjectDashboard from '../containers/projects/dashboard'
import MyAccountPage from '../containers/account'

import PricingPage from '../containers/pricing'
import SuccessPage from '../containers/pricing/success'
import CancelPage from '../containers/pricing/cancel'

import NotFound from '../containers/not-found'
import CheckEmail from '../containers/checkEmail'
import AcceptDeadline from '../containers/deadline'
import HomePage from '../containers/home';
import ProjectsPage from '../containers/projects';
import ProjectDetail from '../containers/projectDetail';
import BlogsPage from '../containers/blogs';
import AboutPage from '../containers/about';
import ContactPage from '../containers/contactPage';

const MyRouter = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/project/:id' element={<ProjectDetail />} />
            <Route path='/blogs' element={<BlogsPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/checkemail/:token' element={<CheckEmail />} />
            <Route path='/deadline/:id' element={<AcceptDeadline />} />
            <Route path='/pricing' element={<PricingPage />} />
            <Route path='/create-project' element={<CreateProjectWithoutLogin />} />

            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route path='/create' element={<CreateDeadlinePage />} />
              <Route path='/project/create' element={<CreateProjectPage />} />
              <Route path='/edit/:id' element={<EditDeadlinePage />} />
              <Route path='/edit-project/:id' element={<EditProjectPage />} />
              <Route path='/detail/:id' element={<DetailDeadlinePage />} />
              <Route path='/dashboard' element={<ProjectDashboard />} />
              <Route path='/success/:sessionId' element={<SuccessPage />} />
              <Route path='/cancel' element={<CancelPage />} />
              <Route path='/myaccount' element={<MyAccountPage />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default MyRouter;
