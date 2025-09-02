import React from "react";
import Usercontext from "./UserContext";
const UserContextProvider=({children})=>{
    const [user, setuser]=React.useState(null)
    return (
        <Usercontext.Provider  value={{user,setuser}}>
        {children}
        </Usercontext.Provider>
    )

}
export default UserContextProvider