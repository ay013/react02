import UserContextProvider from "./Context/UserContextProvider"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContext from "./Context/UserContext"
import './App.css'
function App() {


  return (
    <UserContextProvider>
  <div className='bg-orange'>hello</div>
  <Login/>
  <Profile/>
    </UserContextProvider>
  )
}

export default App
