import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Aside from './components/Aside'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Aside toggleProp={".main-home"}/><Home/></>,
    },
    {
      path: "/about",
      element: <><Aside/><About/></>,
    },
    {
      path: "/contact",
      element: <><Aside toggleProp={".main-contact"}/><Contact/></>,
    },
    {
      path: "/product",
      element: <><Aside/><Product/></>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
