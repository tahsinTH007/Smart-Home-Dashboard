import {Routes, Route} from 'react-router-dom'
import axios from "axios";
import Login from "./pages/Login";
import Registration from "./pages/Registration"
import Home from './pages/Home'
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';


axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <Routes>
      <Route path='/' element = {<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/register' element ={<Registration />}></Route>
    </Routes>
  );
}

export default App;
