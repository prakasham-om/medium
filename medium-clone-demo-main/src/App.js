import './App.css';
import Home from './Components/Home';
import Ourstory from './Components/Subpages/Ourstory';
import Signin from  './Components/Subpages/Signin';
import {Routes,Route } from 'react-router-dom';
import Login from './Components/Subpages/Login';
import Profile from './Components/Subpages/Profile';
import User from './Components/User';
import Sendfeed from './Components/Subpages/Sendfeed';
function App() {
  
  return (
      <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path="/ourstory" element={<Ourstory/>}/>
                <Route path='/signin' element={<Signin/>} /> 
                <Route path='/login' element={<Login/>} /> 
                <Route path='/profile' element={<Profile/>} /> 
                <Route path='/user' element={<User/>} />
                <Route path='/post' element={<Sendfeed/>} />
            </Routes>   
      </>
  );
}
export default App;
