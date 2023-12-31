import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Component/Home/Home"
import Login from "./Component/Login/Login"
import Subscription from "./Component/Subscription/Subscription";
import Conditions from "./Component/CONDITIONS/Conditions";
import Legales from "./Component/CONDITIONS/Legales";
import POLITIQUE from "./Component/CONDITIONS/POLITIQUE";
function App() {



  return (
    <div className="App">
   
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Login" element={<Login />}></Route>

          
          <Route path="/Subscription" element={<Subscription />}></Route>


          <Route path="/Conditions" element={<Conditions />}></Route>
          <Route path="/Legales" element={<Legales />}></Route>
          <Route path="/POLITIQUE" element={<POLITIQUE />}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
