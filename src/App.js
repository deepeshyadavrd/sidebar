import React, { useState } from 'react'
import './App.css';
import Backdrop from './Backdrop';
import Sidebar from './Sidebar';
import ToolBar from './ToolBar';

function App() {
  const[sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }
  return (
    <div>
      <ToolBar openSidebar={toggleSidebar}/>
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
      <Sidebar sidebar={sidebar}/>
    </div>
    
  );
}

export default App;
