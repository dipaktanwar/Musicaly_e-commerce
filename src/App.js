
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Component/HomePage';
import Navbar from './Component/Navbar';
import CartDetails from './Component/CartDetails';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HomePage/>  
    </div>
  );
}

export default App;
