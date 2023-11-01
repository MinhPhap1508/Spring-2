import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Login } from './components/home/Login';
import { Header } from './components/home/Header';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/header' element={<Header/>}/>
    </Routes>
    </>
  );
}

export default App;
