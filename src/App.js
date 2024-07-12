import React, { useState } from 'react'
import './App.css';
import Sidebar from './Sidebar';
import Backdrop from './Backdrop';
import ToolBar from './ToolBar';

function App() {
  const[sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }
  return (
    <div>
      <ToolBar openSidebar={toggleSidebar}/>
      <Backdrop/>
      <Sidebar sidebar={sidebar}/>
    </div>
  );
}

export default App;
