import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route,createBrowserRouter, RouterProvider ,createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Header from './components/Header/Header.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
        
//         element: <div><Home /> <About /></div>//yaha per dono render hoga 
//       },{
//         path:"about",
//         element:<About/>
//       },{
//         path:"contact",
//         element:<Contact/>
//       },{
//         path:"user/:userid",
//         element:<User/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<div>
        <About/><Home/>//THIS MEANS THAT react will render both about and home 
      </div>} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:user' element={<User />} />
      <Route path='github' element={<Github/> }/>

      <Route
       
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
