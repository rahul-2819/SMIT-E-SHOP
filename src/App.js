import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_Seller from './pages/Sign_Seller';
import Login_Seller from './pages/Login_Seller';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/seller_signup' element={<Sign_Seller/>}/>
            <Route path='seller_login' element={<Login_Seller/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
