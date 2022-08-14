import './App.css';
import {Header} from './Header'
import { BestSellers } from './BestSellers';
import {Routes, Route} from 'react-router-dom';
import {Product} from './Product';

function App() {
  return (
    <div className='appContainer'>
      <Header />
      <Routes>
        <Route path='/products' element = {<BestSellers />} />
        <Route path='/products/:id' element = {<Product />} />
      </Routes>
    </div>
  );
}

export default App;
