import React, { useState } from 'react'
import './App.css';
import Backdrop from './Backdrop';
import Sidebar from './Sidebar';
import ToolBar from './ToolBar';

const App = () => {
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
    
  )
}

export default App;
