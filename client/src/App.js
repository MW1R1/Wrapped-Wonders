import './App.css';
import React, {useEffect, useState} from "react"
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [gifts, setGift] = useState([])
  useEffect(() => {
    fetching()
  },[])

  const fetching = async () => {
    const response = await fetch("/gifts")
    const data = await response.json()
    return setGift(data)
  }
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home gifts = {gifts}/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
