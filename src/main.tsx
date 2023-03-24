import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import Root from './routes/root';
import ErrorPage from './error-page';
import ProductsPage
, { Loader as ProductLoader }
  from './components/landingpage_components.tsx/products';
import LandingPage from './components/landingpage_components.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/products/:category",
        element: <ProductsPage />,
        loader: ProductLoader,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
