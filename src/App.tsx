
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import AppLayout from './ui/AppLayout'
import ErrorPage from './Pages/ErrorPage'
import HomePage from './Pages/HomePage'

import Products from './Pages/Products'


const router = createBrowserRouter([
  { element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {path: '/', element: <HomePage />},
      {path: '/products', element: <Products />}
    ]
  }
])

function App() {
  return <div>
    <RouterProvider router={router} />;
    </div>
}

export default App

//todo: still create user