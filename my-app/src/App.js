import './App.css';
import Sidebar from './Component/sidebar';
import React from 'react';
import { BrowserRouter as Router, Route,  } from "react-router-dom";




import Dashboard from './Component/Dashboard';
import About from './Component/About';
import Message from './Component/Message';

function App() {
  return (

    <Router>

    <Sidebar>

    <Route exact path="/" component={Dashboard} />
      <Route exact path ="/message" component={Message}/>
      <Route exact path ="/about" component={About}/>
      </Sidebar>



      </Router>


    
  );
}

export default App;
