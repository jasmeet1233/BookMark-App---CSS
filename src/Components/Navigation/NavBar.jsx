import React from 'react'
import { BsBell } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io"; 

const NavBar = () => {
    return (
      <nav className="nav-container">
        <div className="nav-left">LOGO</div>
        <div className="nav-center">
          <div>Links</div>
          <div>Images</div>
          <div>Text</div>
        </div>

        <div className="nav-right">
          <BsBell size={20} />
          <img
            src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
            alt="man"
          />
          <p>Jasmeet Singh</p>
          <IoMdArrowDropdown />
        </div>
      </nav>
    );
}

export default NavBar
