import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import Home from './components/home/home.jsx';
import About from './components/About/about.jsx';
import Login from './components/Login/login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route path="" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path='login' element={<Login />} />
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
