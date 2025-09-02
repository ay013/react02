import { useEffect, useState } from 'react'
import { useCallback,useRef } from 'react'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [length, setlength] = useState(8)//here we are using this as if we set the length to 17 and make number true so the page will re render but because we are using usestate it remembers the value 17 
  const [numberallowed, setnumberallowed] = useState(false)//
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")
  //ref hook
  const passwordref=useRef(null)
  const copyPasswordToClipboard=useCallback(()=>{
window.navigator.clipboard.writeText(password)



  },[password])
  const passwordgenerator = useCallback(() => {// here  if the page re renders so if nothing is changed in the function or any dependencies is not changed then the refernce will remain smae if any depencies changes it creates a new reference 
    let pass = '';










    let str = "qwertyuioplkjhgfdsaxvzbnmQWERTYUIOPLKJHGFDSAXCVBNM";
    if (numberallowed) {
      str += "123456789"
    }
    if (charallowed) {
      str += "!@#$%^&*~`>*/"
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)



  }, [length, numberallowed, charallowed, setpassword])
  useEffect(() => {//Whenever length, numberallowed, or charallowed changes → call passwordgenerator.
  passwordgenerator()
//****yaha per hm aagra passworgeneetor ko aise hi run karenge to infinite loop me phass jaynge jaise hi password ganerator call hoga to fir render hoga set password call hoga fir se render hoga to loopme phas jangye  */
},[length,numberallowed,charallowed,passwordgenerator])

  return (
    <>
      {/* <div className='flex  justify-center w-full max-w-md mx-auto shdow-md rounded-lg px-45  my-8  text-amber-500 bg-gray-700'> text</div> */}
      <div className='flex justify-center w-full max-w-md mx-auto shdow-md rounded-lg px-45  my-8 '>


        <input type="text" value={password}// password represent the current  value of the state .
          placeholder='password'
          readOnly
          className='p-6 text-black bg-white'
          ref={passwordref} />
        <button  onClick={copyPasswordToClipboard}
        className='text-white'>COPY</button>
        

        <div>
          <div><input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer text-white'
            onChange={(e) => { setlength(e.target.value) }} />     yaha per on change lgya ha as jabhi range field me change ho tab kya karo setlength me us alue ko daal do 

            <label >Length:{length}</label>




          </div>
          <div><input type="checkbox"
            defaultChecked={numberallowed}
            id='numberinput'
            onChange={() => {
              setnumberallowed((prev) => !prev)

            }}



          />
            <label htmlFor="numberinput">NUMbers</label></div>
        </div>
        <div>
          <input type="checkbox"
            defaultChecked={charallowed}
            id='charinput'
            onChange={() => {
              setcharallowed((prev) => !prev)// jo bhi previous value thi uska just opposite hogya 
            }}




          />     <label htmlFor="charinput">character</label>
        </div>

      </div>



    </>
  )
}

export default App
