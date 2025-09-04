import React, { useState, useEffect } from "react";
// import { useLoaderData } from 'react-router-dom'

function Bookhub() {
    // const book=useLoaderData();
    const [data, setData] = useState({});//github
    const [book, setBook] = useState("machine");
    const [books, setBooks] = useState([]); // store books array
    const [pricefilter,setPriceFilter]=useState("")
    const [page,setpage]=useState("1")
    const [counter,setcounter]=useState(0)
    const addcount=()=>(setcounter(counter+1))
    const subcount=()=>
        {
            if (counter>0)
            setcounter(counter-1)}



  
    function convertToINR(priceString) {
        if (!priceString || priceString === "Free") return "Free";

        // remove `$` and convert to number
        const usd = parseFloat(priceString.replace("$", ""));

        // conversion rate (you can update dynamically if needed)
        const rate = 83;
        const inr = usd * rate;

        // return formatted INR
        return `₹${inr.toFixed(2)}`;
    }
    function convertToINR1(priceString) {
        if (!priceString || priceString === "Free") return "Free";

        // remove `$` and convert to number
        const usd = parseFloat(priceString.replace("$", ""));

        // conversion rate (you can update dynamically if needed)
        const rate = 83;
        const inr = usd * rate;

        // return formatted INR
        return inr;

    }
   

    // fetch github followers
    useEffect(() => {
        fetch("https://api.github.com/users/hiteshchoudhary")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    // fetch books when "book" changes
    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/search/${book}/${counter+1}`)
            .then((res) => res.json())
            .then((result) => {
                setBooks(result.books || []); // update books arrays
            });
    }, [book,counter]);
    const userbook = books.filter((bk) => {
        if (pricefilter === "1000"){
            return convertToINR1(bk.price) <1000
        }
        else if (pricefilter ==="1000+"){
        return convertToINR1(bk.price)>1000
    }
    else {
            return convertToINR1(bk.price) >0
    }

    })
    console.log(userbook);

    return (
        <div>
            <div>Followers: {data.followers}</div>

            {/* search bar */}
            <div className="bg-white flex justify-center items-center gap-7">
                {/* <input
                    type="text"
                    placeholder="Search your book here!"
                    className="mt-3.5 p-2 rounded-xl bg-blue-600 text-white text-2xl"
                    onChange={(e) => setBook(e.target.value)}
                /> */}
                {/* A container to position the icon */}
                <div className="relative mt-4 w-full max-w-lg">
                    {/* The search icon SVG */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                    </div>

                    {/* The input field */}
                    <input
                        type="text"
                        placeholder="Search your book here!"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 text-lg text-gray-900 transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setBook(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex justify-between mb-6">
                {/* Price filter */}
                <select onChange={(e) => setPriceFilter(e.target.value)} className="border px-3 py-2 rounded-md shadow-sm bg-white">
                
                    <option value="">Filter by Price</option>
                    <option value="1000">₹0 – ₹1000</option>
                   
                    <option value="1000+">₹1000+</option>
                </select> </div>

            {/* book grid */}
            <div className="grid grid-cols-4 gap-6 p-6">
                {userbook.map((b1,index)=>(
                    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                        <img src={b1.image} alt={b1.title} className="w-32 h-40 object-cover rounded-md" />
                        <p className="mt-3 font-semibold text-gray-800">{convertToINR(b1.price)}</p>
                        <p className="text-sm text-gray-600 text-center">{b1.title}</p>
                    </div>
                ))}

                {/* {userbook[1] && (
                    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                        <img src={userbook[1].image} alt={userbook[1].title} className="w-32 h-40 object-cover rounded-md" />
                        <p className="mt-3 font-semibold text-gray-800">{convertToINR(userbook[1].price)}</p>
                        <p className="text-sm text-gray-600 text-center">{userbook[1].title}</p>
                    </div>
                )}

                {
                    userbook[2] && (
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src={userbook[2].image} alt={books[2].title} className="w-32 h-40 object-cover rounded-md" />
                            <p className="mt-3 font-semibold text-gray-800">{convertToINR(userbook[2].price)}</p>
                            <p className="text-sm text-gray-600 text-center">{userbook[2].title}</p>
                        </div>
                    )
                }
                {
                    userbook[3] && (
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src={userbook[2].image} alt={userbook[3].title} className="w-32 h-40 object-cover rounded-md" />
                            <p className="mt-3 font-semibold text-gray-800">{convertToINR(userbook[3].price)}</p>
                            <p className="text-sm text-gray-600 text-center">{userbook[3].title}</p>
                        </div>
                    )
                }
                {
                    userbook[4] && (
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src={userbook[4].image} alt={userbook[4].title} className="w-32 h-40 object-cover rounded-md" />
                            <p className="mt-3 font-semibold text-gray-800">{convertToINR(userbook[4].price)}</p>
                            <p className="text-sm text-gray-600 text-center">{userbook[4].title}</p>
                        </div>
                    )
                }
                {
                    userbook[5] && (
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src={userbook[5].image} alt={userbook[5].title} className="w-32 h-40 object-cover rounded-md" />
                            <p className="mt-3 font-semibold text-gray-800">{convertToINR(userbook[5].price)}</p>
                            <p className="text-sm text-gray-600 text-center">{userbook[5].title}</p>
                        </div>
                    )
                }
                {
                    userbook[6] && (
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src={userbook[6].image} alt={userbook[6].title} className="w-32 h-40 object-cover rounded-md" />
                            <p className="mt-3 font-semibold text-gray-800">{convertToINR(userbook[6].price)}</p>
                            <p className="text-sm text-gray-600 text-center">{userbook[6].title}</p>
                        </div>
                    )
                }
                {
                    userbook[7] && (
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src={userbook[2].image} alt={userbook[7].title} className="w-32 h-40 object-cover rounded-md" />
                            <p className="mt-3 font-semibold text-gray-800">{convertToINR(userbook[7].price)}</p>
                            <p className="text-sm text-gray-600 text-center">{userbook[7].title}</p>
                        </div>
                    )
                }
                {
                    userbook[8] && (
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src={userbook[8].image} alt={userbook[8].title} className="w-32 h-40 object-cover rounded-md" />
                            <p className="mt-3 font-semibold text-gray-800">{convertToINR(userbook[8].price)}</p>
                            <p className="text-sm text-gray-600 text-center">{userbook[8].title}</p>
                        </div>
                    )
                }
                {
                    userbook[9] && (
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src={userbook[9].image} alt={userbook[9].title} className="w-32 h-40 object-cover rounded-md" />
                            <p className="mt-3 font-semibold text-gray-800">{convertToINR(userbook[9].price)}</p>
                            <p className="text-sm text-gray-600 text-center">{userbook[9].title}</p>
                        </div>
                    )
                }
                {
                    userbook[10] && (
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src={userbook[10].image} alt={userbook[10].title} className="w-32 h-40 object-cover rounded-md" />
                            <p className="mt-3 font-semibold text-gray-800">{convertToINR(userbook[10].price)}</p>
                            <p className="text-sm text-gray-600 text-center">{userbook[10].title}</p>
                        </div>
                    )
                } */}
               
            </div>
            {/* <h2>page-</h2> */}
            {/* <h2>page-{counter}</h2>
            <button  className="bg-blue-400 p-2.5 mb-1.5 hover:bg-blue-950 text-amber-50 rounded-4xl"  onClick={addcount}>next page </button>
            <br />
            <button  className="bg-blue-400 p-2.5 hover:bg-blue-950 text-amber-50 rounded-4xl "onClick={subcount}>previous page</button> */}
            <h2 className="w-fit rounded-lg bg-blue-200 px-6 py-3 text-2xl font-bold text-blue-800">
                Page-{counter}
            </h2>

            {/* A container for layout */}
            <div className="mt-4 flex items-center gap-3">
                {/* Previous Page Button */}
                <button
                    onClick={subcount}
                    className="mb-1.5 rounded-md bg-blue-600 px-4 py-2 font-bold text-white transition-all duration-200 hover:bg-blue-700 active:bg-blue-800 active:scale-95"
                >
                    Previous Page
                </button>

                {/* Next Page Button */}
                <button
                    onClick={addcount}
                    className=" mb-1.5 rounded-md bg-blue-600 px-4 py-2 font-bold text-white transition-all duration-200 hover:bg-blue-700 active:bg-blue-800 active:scale-95"
                >
                    Next Page
                </button>
            </div>
        </div>
    );
}

export default Bookhub;
// export const bookhubInfoLoader = async () => {
//     const response = await fetch(`https://api.itbook.store/1.0/search/${book}/1`)
//     return response.json()
// }

