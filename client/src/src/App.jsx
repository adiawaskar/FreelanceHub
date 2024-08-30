import React from 'react';
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content';
import Profile from './components/Profile/Profile';
import './App.css';
function App() {
  return (
    <div className='dashboard'>
        <Sidebar />
        <div className="dashboard--content">
          <Content />
          <Profile />
        </div>
    </div>
  );
}

export default App;
