import "./App.css";
import { Routes, Route } from "react-router-dom";
import Userregister from "./components/userregister";
import Axios from "./components/axios";
import Userlogin from "./components/userlogin";
import Dashboard from "./components/dashboard";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>hello</div>}></Route>
        <Route path="/register" element={<Userregister />}></Route>
        <Route path="/userlist" element={<Axios />}></Route>
        <Route path="/login" element={<Userlogin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
