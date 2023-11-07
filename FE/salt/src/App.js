import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Login } from './components/home/Login';
import { Header } from './components/home/Header';
import { Cart } from './components/home/Cart';
import { Detail } from './components/home/Detail';
import ProductDetail from './components/home/ProductDetail';
import { Register } from './components/home/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      <Route path='/register' element={<Register/>}/>
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App;
