import React from 'react'
import { FaAlignCenter } from "react-icons/fa6";

const ToolBar = ({openSidebar}) => {
  return (
    <div className='tool-bar'>
      <div className='burger' onClick={openSidebar}>
      <FaAlignCenter />
      </div>
      <div className='title'>RD</div>
    </div>
  )
}

export default ToolBar;