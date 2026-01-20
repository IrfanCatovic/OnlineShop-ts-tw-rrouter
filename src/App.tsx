
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import AppLayout from './ui/AppLayout'
import ErrorPage from './Pages/ErrorPage'
import HomePage from './Pages/HomePage'
import OrderPage from './Pages/OrderPage'


const router = createBrowserRouter([
  { element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {path: '/', element: <HomePage />},
      {path: '/orders', element: <OrderPage />}
    ]
  }
])

function App() {
  return <div>
    <RouterProvider router={router} />;
    </div>
}

export default App
