import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Bookhub from './Components/Bookhub/Bookhub.jsx'
// import Bookhub, { bookhubInfoLoader } from './Components/Bookhub/Bookhub.jsx'/


const router=createBrowserRouter([


  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>

      },{
        path:"about",
        element:<About/>
      },{
        path:"Contact",
        element:<Contact/>},
      {
        path:"Github",
        element:<Bookhub/>
      },
      // {
      //   loader: { bookhubInfoLoader},
      //   path:"Github",
      //   element:<Bookhub/>
      // }

    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
