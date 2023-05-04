import './App.css';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Homepage from './components/Homepage';
import About from './components/About';
import Header from './components/Header';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/proxifurniture' element={<Homepage />} />
          <Route path='/proxifurniture/products' element={<Products />} />
          <Route path='/proxifurniture/about' element={<About />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
