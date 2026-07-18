import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import LoginGate from './components/Logingate';
import Home from './pages/Home.jsx';
import Photos from './pages/Photos.jsx';
import Calendar from './pages/Calender.jsx';
import FamilyTree from './components/FamilyTree';

export default function App() {
  const [unlocked, setUnlocked] = useState(
    !!localStorage.getItem('familyEmail') && !!localStorage.getItem('familyPassword')
  );

  if (!unlocked) {
    return <LoginGate onSuccess={() => setUnlocked(true)} />;
  }

  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos mode="upload" />} /> 
        <Route path="/calendar" element={<Calendar />} />
       <Route path="/family-tree" element={<FamilyTree />} />
        <Route path="/memories" element={<Photos mode="gallery" />} /> 
      </Routes>
    </div>
  );
}