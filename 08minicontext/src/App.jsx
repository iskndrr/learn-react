import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from "./components/Profile.jsx";
import Login from "./components/Login.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React Course for Context Api</h1>
        <Login/>
        <Profile/>
    </UserContextProvider>
  )
}

export default App
