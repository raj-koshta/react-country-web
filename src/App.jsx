import React from 'react'
import "./App.css"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Country from "./pages/Country"
import About from "./pages/About"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './components/layout/CountryDetails'

const router = createBrowserRouter([
  {
    path: "/react-country-web",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/react-country-web",
        element: <Home />
      },
      {
        path: "/react-country-web/contact",
        element: <Contact />
      },
      {
        path: "/react-country-web/country",
        element: <Country />
      },
      {
        path: "/react-country-web/country/:id",
        element: <CountryDetails />
      },
      {
        path: "/react-country-web/about",
        element: <About />
      }
    ]
  },
])

const App = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App