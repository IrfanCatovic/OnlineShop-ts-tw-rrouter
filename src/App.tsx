
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import AppLayout from './ui/AppLayout'
import ErrorPage from './Pages/ErrorPage'
import HomePage from './Pages/HomePage'

import Products, {loader as productsLoader} from "./Pages/Products";
import CartOverview from './features/Cart/CartOverview'




const router = createBrowserRouter([
  { element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {path: '/', element: <HomePage />},
      {path: "/products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "/cart",
        element: <CartOverview />
      }
    ]
  }
])

function App() {

  return <div>
    <RouterProvider router={router} />;
    </div>
}

export default App

//todo: onClick addToCart and after that reduce all prices from reciepe 

//todo: Create Form for adding new items to the store with actions
//todo: Create same thing for odeca like for obuca
//todo: create cart component
//todo: make final reciepe component


//todo: make apiCloaths for fake api to load all cloath from some store
//I think when we have that we will need loader like fast-pizza-project


//todo: When I have user registered and come back on start there will bee hello {username}