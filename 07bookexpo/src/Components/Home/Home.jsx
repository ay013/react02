import React from 'react'
import { useState,useEffect } from 'react';

function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch('https://api.itbook.store/1.0/search/machine/1').then(res => res.json()).then(data1 => {

      console.log(data1.books)
      setdata(data1.books||[])
    })

  }, [])
  return (
  
      <div className="grid grid-cols-4 gap-6 p-6">
        {data.map((book,index)=>(          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={book.image} alt={book.title} className="w-32 h-40 object-cover rounded-md" />
            <p className="mt-3 font-semibold text-gray-800">{(book.price)}</p>
            <p className="text-sm text-gray-600 text-center">{book.title}</p>
          </div>
        ))}
          
    </div>
  )
}

export default Home 
