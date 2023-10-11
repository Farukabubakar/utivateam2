import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

function App() {
  return (
   <BrowserRouter>
     <Routes>
     <Route path='/LoginForm' element={<LoginForm/>} ></Route>
     <Route path='/SignupForm' element={<SignupForm/>} ></Route>


      
       
     </Routes>
   </BrowserRouter>

  );
}

export default App;
