
import React from 'react'
import Home from './components/HomePage/Home'
import AboutPage from './components/AboutPage/AboutPage'
import ServicePage from './components/ServicePage/ServicePage'
import RentPage from './components/RentPage/RentPage'
import ContactPage from './components/ContactPage/ConatctPage'
import Footer from './components/Footer/Footer'
import ScrollToTopButton from './components/ScrollToTop/ScrollToTopButton'


import GlobalStyle from './globalStyles'

function App() {


  return (
    <div>
      <GlobalStyle/>
      <Home/>
      <ScrollToTopButton/>
      <AboutPage />
      <ServicePage />
      <RentPage />
      <ContactPage />
      <Footer />
    </div>

  );
}

export default App;
