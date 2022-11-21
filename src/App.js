
import React from 'react'
import { Switch, Route, Routes } from 'react-router-dom'
import Home from './components/HomePage/Home'
import PropertyManagement from './components/PropertyManagement/PropertyManagement'
import Rentals from './components/Rentals/Rentals'



import GlobalStyle from './globalStyles'

function App() {


  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={ <Home/>}/>

        <Route exact path="/propertymanagement" element={<PropertyManagement/>}/>

        <Route exact path="Rentals" element={  <Rentals/>}/>
        
      </Routes>
    </div>

  );
}

export default App;
