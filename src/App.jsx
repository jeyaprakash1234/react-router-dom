import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import All from './components/All';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <Router>
      <div>
       <Navbar/>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstack" element={<FullStackDevelopment />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
