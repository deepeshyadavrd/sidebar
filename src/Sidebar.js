import React from 'react'
import { FaHome } from "react-icons/fa"
import { FaShoppingCart } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";

export default function Sidebar({Sidebar}) {
  return (
    <div className={Sidebar?"sidebar sidebar-open":"sidebar"}>
        <li><FaHome/>Home</li>
        <li><FaShoppingCart/>Products</li>
        <li><FaNewspaper/>Career</li>
        <li><FaPhoneAlt/>Contact us</li>
        <li><FaInfo/>About us</li>
    </div>
  )
}
