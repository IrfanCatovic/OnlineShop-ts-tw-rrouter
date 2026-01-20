
import { createBrowserRouter, RouterProvider } from 'react-router'
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
  return <RouterProvider router={router} />;
}

export default App
