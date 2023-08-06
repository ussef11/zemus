import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Component/Home/Home"
import Login from "./Component/Login/Login"
import Subscription from "./Component/Subscription/Subscription";

function App() {



  return (
    <div className="App">
   
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Subscription" element={<Subscription />}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
