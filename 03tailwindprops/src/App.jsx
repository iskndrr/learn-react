import {useState} from 'react'

import './App.css'
import card from "./components/Card.jsx";
import Card from "./components/Card.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 className='text-3xl bg-green-500 p-3 rounded-md'>vite with tailwind</h1>
            <Card userName='Mohamed Saeed'/>
            <Card />
            <Card />
        </>
    )
}

export default App
