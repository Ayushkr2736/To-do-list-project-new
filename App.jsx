import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ToDoPage from './pages/ToDoPage';
import Header from './components/Header';
import './App.css';
console.log('App.jsx file is loaded'); 
const App = () => {
  console.log('App is rendering...');
  return(
    <div>
      

      <Header />
      <Routes>
     
        <Route path="/" element={<LoginPage />} />
        <Route path="/todo" element={<ToDoPage />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  )
};

export default App;