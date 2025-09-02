import UserContextProvider from "./assets/Context/Contextprovider"

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
  <div className='bg-orange'>hello</div>
    </UserContextProvider>
  )
}

export default App
