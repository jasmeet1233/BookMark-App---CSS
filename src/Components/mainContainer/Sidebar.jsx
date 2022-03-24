import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import client from "../../api/api_loginSignUp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ActionCreators } from "redux-devtools";
import { AiFillFolder } from "react-icons/ai";

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
    const data = { folderId: id };
    console.log("hello");
    dispatch({ type: "addDeleteID", payload: id });
    confirmDeletion();
    console.log(id);
  };

  const addFolder = () => {
    dispatch({ type: "openModal" });
  };

  function confirmDeletion() {
    dispatch({ type: "openDeleteModal" });
  }

  const setFolderID = async (id) => {
    dispatch({ type: "setFolderID", payload: id });
    const response = await client.get("folder-bookmarks", {
      params: { folderId: id },
    });
    console.log(response, "---response");
    dispatch({ type: "bookmark_Fetch_Success", payload: response.data });
  };

  return (
    <aside className="sidebar">
      <div className="top-sidebar">
        {/* <div>All projects</div>
        <div>Root</div>
        <div>Favorites</div> */}
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
        <p onClick={addFolder}>
          <AiOutlinePlus size={20} />
        </p>
      </div>

      <div className="bottom-sidebar">
        {folders.map((folder) => {
          return (
            <div
              key={folder.id}
              style={{
                position: "relative",
                padding: "8px",
                display: "flex",
                width: "85%",
                cursor: "pointer",
              }}
              className="folder"
            >
              <div
                style={{
                  paddingLeft: "10px",
                  paddingRight: "20px",
                  paddingTop: "2px",
                }}
              >
                <AiFillFolder />{" "}
              </div>
              <p
                style={{ display: "inline" }}
                onClick={() => setFolderID(folder.id)}
              >
                {folder.name}
              </p>
              {/* <button
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
              </button> */}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
