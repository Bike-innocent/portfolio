
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Index from './pages/home/Index.jsx';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Project from './pages/project/Project.jsx';
import ProjectDetails from './pages/project-details/ProjectDetails.jsx';
import Blog from './pages/blog/Blog.jsx';
import BlogDetails from './pages/blog-details/BlogDetails.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';

// Define the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      { path: '/', element: <Index /> },
      { path: '/contact', element: <Contact /> },
      { path: '/mylogin', element: <Login /> },
      { path: '/not-found', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
      { path: '/about', element: < About/> },
      { path: '/blog', element: < Blog/> },
      { path: '/projects', element: < Project/> },
      { path: '/project-details', element: < ProjectDetails/> },
      { path: '/blog-details', element: < BlogDetails/> },
    
    ],
  },
 
]);

function App() {
    return (
       
            <RouterProvider router={router} />
        
    );
}

export default App;
