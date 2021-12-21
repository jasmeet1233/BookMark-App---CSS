import React from 'react'
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import axios from 'axios'
import client from '../../API_Calls/api'


const callApi = async() => {
  const response = await client.get(
    "/getAllusers"
  );
  console.log(response.data)
}

callApi()

const Sidebar = () => {
    return (
      <aside className="sidebar">
        <div className="top-sidebar">
          <div>All projects</div>
          <div>Root</div>
          <div>Favorites</div>
        </div>

        <div className="mid-sidebar">
          <div>Folders</div>
          <div>Tags</div>
        </div>

        <div className="input-sidebar">
          <div>
            <FiSearch />
          </div>
          <input type="text" placeholder="Search.." />
          <p>
            <AiOutlinePlus size={20} />
          </p>
        </div>

        {/* <div className='bottom-sidebar'>
            <div>Folder 1</div>
            <div>Folder 2</div>
          </div> */}
      </aside>
    );
}

export default Sidebar
