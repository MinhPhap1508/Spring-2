import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Login } from './components/home/Login';
import { Header } from './components/home/Header';
import { Cart } from './components/home/Cart';
import { Detail } from './components/home/Detail';
import ProductDetail from './components/home/ProductDetail';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/header' element={<Header/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='product' element={<ProductDetail/>}/>
    </Routes>
    </>
  );
}

export default App;
