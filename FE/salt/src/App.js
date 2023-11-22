import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Login } from './components/home/Login';
import { Cart } from './components/home/Cart';
import { Detail } from './components/home/Detail';
import ProductDetail from './components/home/ProductDetail';
import { Register } from './components/home/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Menu } from './components/home/Menu';
import { List } from './components/product/List';
import { History } from './components/orders/History';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/list' element={<List/>}/>
      <Route path='history' element={<History/>}/>
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App;
