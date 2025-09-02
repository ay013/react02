import React ,{useState,UseContext} from 'react'
import React from 'react'
import UserContextProvider from '../assets/Context/Contextprovider'

function Login() {
    const [username,setusername]=useState('')
    const [password, setpassword] = useState('')
    
    const handlesubmit=(e)=>{
      e.preventDefault()
      setusername({username,password})

    }
  return (
    <div>
      <h2 className='bg-amber-500'>Login</h2>
      <input type="text" value={username} onClick={(e)=>setusername(e.target.value)} placeholder='username' /> 
      <input type="text" value={password} onClick={(e) => setpassword(e.target.value)} placeholder='password'/>
      <button onClick={handlesubmit}>submit</button>

    </div>
  )
}

export default Login
