import React from 'react'
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import LogIn from './views/LogIn';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/login' element={<LogIn />}/>
    </Routes>
    </div>
  );
}


////made changes

export default App;
