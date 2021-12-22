import React from 'react'
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import axios from 'axios'
import client from '../../API_Calls/api'
import { useSelector } from 'react-redux';

const fId = "7c28dc57-6d97-45b0-8632-11d3b6d671a0";

const url = "https://bookmarks-app-server.herokuapp.com/folder";
const callApi = async() => {
  const response = await client.get(
    "/getAllusers"
  );
  console.log(response.data)
 const response2 =  await client.get("folder-bookmarks", {
    folderId: fId,
  });
  console.log(response2.data)
}

callApi()



const Sidebar = () => {

  const folders = useSelector((state) => state.bookmarkReducer.folder);
  
  const folderDeleteHandler = async (id) => {
    const response = client.delete('folder', { data: { folderId : id } });
  }

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

        <div className='bottom-sidebar'>
            {
              folders.map((folder) => {
                return (
                  <>
                    <p>{folder.name}</p>
                    
                  </>
                );
              })
            }
          </div>
      </aside>
    );
}

export default Sidebar
