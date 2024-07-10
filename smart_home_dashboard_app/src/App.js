import {Routes, Route} from 'react-router-dom'
import axios from "axios";
import Login from "./pages/Login";
import Registration from "./pages/Registration"
import Home from './pages/Home'


axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element ={<Registration/>}></Route>
    </Routes>
  );
}

export default App;
