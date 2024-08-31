import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Profile from './components/Profile/Profile';
import './App.css';

function App() {
  // State to track the active item
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <div className='dashboard'>
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="dashboard--content">
        <Content activeItem={activeItem} />
        <Profile />
      </div>
    </div>
  );
}

export default App;


