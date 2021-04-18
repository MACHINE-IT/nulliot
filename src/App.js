import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { uuid } from 'uuidv4';
import './App.css';
import Navbar from './Navbar/Navbar';
import Products from './Products/Products';
import Admin from './Admin/Admin';

function App() {
  const LOCAL_STORAGE_KEY = "products";
  const [products, setProducts] = useState([]);

  const addProductHandler = (product) => {
    console.log(product);
    setProducts([...products, { id: uuid(), ...product }]);
  };

  useEffect(() => {
    const retriveProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveProducts) setProducts(retriveProducts);
  }, []);
  
  useEffect(() => {
    if (products?.length) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
    }
  }, [products]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/admin" exact render={(props) => <Admin {...props} addProductHandler={addProductHandler} />} />
          <Route path="/products" exact render={(props) => <Products {...props} products={products} />} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
