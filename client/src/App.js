import React from 'react'
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import LogIn from './views/LogIn';
import Register from './views/Register';
import AddProducts from './views/AddProducts';
import UpdateProducts from './views/UpdateProducts'
import css from './components/main.module.css'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/addProduct' element={<AddProducts />}/>
      <Route path='/updateProduct/:id' element={<UpdateProducts />}/>

      {/* Redirect */}
      <Route path='*' element={<Navigate to="/dashboard" replace/>}/>
    </Routes>
    </div>
  );
}




export default App;
