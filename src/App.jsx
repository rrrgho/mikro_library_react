import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import RouterPath from './config/RouterPath';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <RouterPath />
      </Router>
    </>
  )
}


export default App;
