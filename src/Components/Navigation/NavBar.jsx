import React from 'react'
import { BsBell } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io"; 
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const userDetail = useSelector((state) => state.bookmarkReducer.userData);

  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem('bookmarkToken');
    window.location.reload(true);
  }


    return (
      <nav className="nav-container">
        <div className="nav-left">LOGO</div>
        <div className="nav-center">
          <div className="first_child">Links</div>
          <div>Images</div>
          <div>Text</div>
        </div>

        <div className="nav-right">
          <BsBell size={20} />
          <img
            src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
            alt="man"
          />
          <p>{userDetail.name}</p>
          <IoMdArrowDropdown onClick={logoutHandler} />
        </div>
      </nav>
    );
}

export default NavBar
