import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

// redux
import { store } from './store';
import { Provider } from 'react-redux';

import Root from './routes/root';
import ErrorPage from './error-page';
import ProductsPage
, { Loader as ProductLoader }
  from './components/landingpage_components.tsx/products';
import LandingPage from './components/landingpage_components.tsx';
import Item, { Loader as ItemLoader } from './routes/item';

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
      {
        path: "/products/:category/:id",
        element: <Item /> ,
        loader: ItemLoader,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </Provider>
)
