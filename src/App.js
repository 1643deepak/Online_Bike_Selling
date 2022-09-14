import logo from './logo.svg';
import './App.css';
import {Navbar} from './navbar';
import {Loginpage} from './login';
import {Homepage} from './home';
import { Bajajbikes } from './bike models/Bajaj';
import {Jawabikedetail } from './bikeproperty/jawabikedetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage1 } from './home1';
import { Signuppage } from './signup';

import {Bikeformdet} from './customerdet/bikeformdet';
function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Loginpage/>}/>
          <Route path="/signup" element={<Signuppage/>}></Route> 
          <Route path="/login" element={<Loginpage/>}></Route> 
          <Route path="/home" element={<Homepage/>}> </Route>
          <Route path="/Bajaj" element={<Bajajbikes/>}> </Route> 
          <Route path="/jawabikedetail/:id" element={<Jawabikedetail/>}> </Route> 
          <Route path="/bikeformdet" element={<Bikeformdet/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
