import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import Hero from './components/hero';
import { productData, productDataTwo } from '../src/components/products/Data';
import Products from './components/products';
import Feature from './components/feature';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading= 'Choose your favorite' data= {productData} />
      <Feature />
      <Products heading= 'Sweet Treats for You' data= {productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
