import React ,{useState, useContext} from 'react'
// import React from 'react'
import UserContextProvider from '../Context/UserContextProvider'
import UserContext from '../Context/UserContext'
function Login() {
    const [username,setusername]=useState('')
    const [password, setpassword] = useState('')
    const {setUser}=useContext(UserContext)//proper context should be given to access this 
    
    const handlesubmit=(e)=>{
      e.preventDefault()
      setUser({username,password})

    }
  return (
    <div>
      <h2 className='bg-amber-500'>Login</h2>
      <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} placeholder='username' /> 
      <input type="text" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='password'/>
      <button onClick={handlesubmit}>submit</button>

    </div>
  )
}

export default Login
