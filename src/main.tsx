import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Business from './pages/Business'
import './styles/global.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/business',
    element: <Business />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
) 