import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppLayout from './ui/AppLayout'
import ErrorPage from './Pages/ErrorPage'
import HomePage from './Pages/HomePage'

const router = createBrowserRouter([
  {element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {path: '/', element: <HomePage />}
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App
