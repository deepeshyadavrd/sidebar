import React from 'react'
import { FaAlignCenter } from "react-icons/fa6";

export default function ToolBar({openSidebar}) {
  return (
    <div className='tool-bar'>
      <div className='burger' onClick={openSidebar}>
      <FaAlignCenter />
      </div>
      <div className='title'>RD</div>
    </div>
  )
}
