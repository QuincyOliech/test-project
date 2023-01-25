import React, {useState} from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './Products';
import Product from './Product';
import About from '../pages/About';
import Footer from './Footer';
import Login from '../pages/Login';
import Register from '../pages/Register';



function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      } */}
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/products/:id" element={<Product/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/login" element={<Login/>}/>
           
        </Routes>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
