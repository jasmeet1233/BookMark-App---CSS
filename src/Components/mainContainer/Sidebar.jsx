import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import client from "../../api/api_loginSignUp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//pos

const url = "https://bookmarks-app-server.herokuapp.com/folder";
const callApi = async () => {
  // const response = await client.get("/getAllusers");
  // console.log(response.data);
  // const response2 = await client.get("/folder-bookmarks", {
  //   folderId: fId,
  // });
  // console.log(response2.data);
};

// callApi();

const Sidebar = () => {
  const folders = useSelector((state) => state.bookmarkReducer.folder);
  const dispatch = useDispatch();
  
  const folderDeleteHandler = async (id) => {
    const token = await JSON.parse(localStorage.getItem("bookmarkToken"));
    const data = {folderId: id};
    // const config = {
    //   method: "delete",
    //   url: url,
    //   headers: {Authorization: `Bearer ${token}`},
    //   data: data,
    // };
    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    confirmDeletion()
    const response = await client.delete("/folder", { data: { folderId: id } });
    console.log(response)
  };

  const addFolder = () => {
    dispatch({ type: "openModal" });
  };

  function confirmDeletion() {
    dispatch({ type: "openDeleteModal" });
  }

  return (
    <aside className="sidebar">
      {/* <div className="top-sidebar">
        <div>All projects</div>
        <div>Root</div>
        <div>Favorites</div>
      </div>

      <div className="mid-sidebar">
        <div>Folders</div>
        <div>Tags</div>
      </div> */}

      <div className="input-sidebar">
        <div>
          <FiSearch />
        </div>
        <input type="text" placeholder="Search.." />
        <p onClick={addFolder}>
          <AiOutlinePlus size={20} />
        </p>
      </div>

      <div className="bottom-sidebar">
        {folders.map((folder) => {
          return (
            <div
              key={folder.id}
              style={{ position: "relative", paddingTop: "10px" }}
            >
              <p style={{ display: "inline" }}>{folder.name}</p>
              <button
                style={{
                  display: "inline",
                  position: "absolute",
                  right: "20px",
                  backgroundColor: "transparent",
                  border: "none",
                  paddingTop: "3px",
                }}
                onClick={() => folderDeleteHandler(folder.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
