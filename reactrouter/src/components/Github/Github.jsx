import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setdata]=useState("");
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary').then(res=>res.json()).then(data=>
         {
                
            console.log(data.followers)
                setdata(data)})
    
    }, [])
    
  return (
    <div>
      Github followers {data.followers}
          <img src={data.avatar_url}  alt="" />
    </div>
  )
}

export default Github
