
import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/HomePage/Home'
import PropertyManagement from './components/PropertyManagement/PropertyManagement'
import Rentals from './components/Rentals/Rentals'
import LoginPage from './components/Login/LoginPage'



import GlobalStyle from './globalStyles'

function App() {


  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={ <Home/>}/>

        <Route exact path="/login" element={ <LoginPage/> }/>

        <Route exact path="/propertymanagement" element={<PropertyManagement/>}/>

        <Route exact path="/rentals" element={<Rentals/>}/>
        
      </Routes>
    </div>

  );
}

export default App;
