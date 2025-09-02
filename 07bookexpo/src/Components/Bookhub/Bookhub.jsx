import React from 'react'
import { useState,useEffect } from 'react';

function Bookhub() {
    const [data, setdata] = useState("");
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary').then(res => res.json()).then(data => {

            console.log(data.followers)
            setdata(data)
        })

    }, [])

const [book, setbook] = useState("algorithm")
console.log(book);


    const [first, setfirst] = useState("")
    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/search/${book}/1`).then(res=>res.json()).then(first=>{
        console.log(first)
        setfirst(first)
    })
    
     
    }, [book])
    

  return (
    <div>
    <div>
      followers: {data.followers}
      </div>
    <div className='bg-white flex  justify-center items-center gap-7'>
     
      <label  for="text">
              <input type="text"  className=' p-auto mt-3.5 rounded-4xl bg-blue-300 text-white flex justify-center items-center '
              onChange={(e)=>{setbook(e.target.value)

              }}
              />Search your book here!</label>
              {/* <button
                  type="submit"
                  className=" bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md 
             hover:bg-blue-700 hover:shadow-lg 
             active:scale-95 transition-all duration-200"
              >
                  SEARCH
              </button> */}
              
          </div>
          
          
          
          
          
          
          
          
          </div>
  )
}

export default Bookhub
