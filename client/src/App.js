import React from 'react'
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import LogIn from './views/LogIn';
import Register from './views/Register';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
    </div>
  );
}




export default App;
