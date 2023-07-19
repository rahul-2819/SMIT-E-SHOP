import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_Seller from "./pages/Sign_Seller";
import Login_Seller from "./pages/Login_Seller";
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from "./components/ContextReducer";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seller_signup" element={<Sign_Seller />} />
        <Route path="seller_login" element={<Login_Seller />} />
      </Routes>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
