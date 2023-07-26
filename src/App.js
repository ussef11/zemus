import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Component/Home/Home"
import Login from "./Component/Login/Login"


function App() {



  return (
    <div className="App">
   
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
