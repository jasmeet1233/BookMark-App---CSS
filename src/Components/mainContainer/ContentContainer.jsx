import React, { useEffect, useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { GrFilter } from "react-icons/gr";
import { useSelector } from "react-redux";
import client from "../../api/api_loginSignUp";
import ModalWindow from "./Modal";
import "./ContentContainer.css";
import axios from "axios";

const ContentContainer = () => {
  const [url, setUrl] = useState("");
  const [folderID, setFolderID] = useState("");
  const [folderName, setFolderName] = useState("");
  const data = useSelector((state) => state.bookmarkReducer);
  const [open, setOpen] = useState(false);
  // console.log(data.folder)
  // const url = "https://bookmarks-app-server.herokuapp.com";

  const saveHandler = async () => {
    console.log("savehandlerrr");
    const token = await JSON.parse(localStorage.getItem("bookmarkToken"));
    var data = {
      folderId: folderID,
      url: "https://en.wikipedia.org/wiki/Snack",
      name: "Favourite Band",
    };

    var config = {
      method: "post",
      url: `https://bookmarks-app-server.herokuapp.com/bookmark`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //"56139fe9-cba3-4d7d-9c86-312b07bd2dcb"

  useEffect(async () => {
    const response = await client.get("folder-bookmarks", {
      params: { folderId: "527d2c7c-7bc1-4ff8-8f2a-2804e1d4a96f" },
    });
    console.log(response, "---response");
  }, []);

  const selectFolder = (id, name) => {
    setFolderID(id);
    setFolderName(name);
  };

  const closeDropdown = (e) => {
    if (
      e.target.classList.contains("dropdown") ||
      e.target.classList.contains("input_dropdown") ||
      e.target.classList.contains("dropdown_p")
    ) {
      return;
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <ModalWindow />
      <div className="content-container" onMouseOver={closeDropdown}>
        <div className="top-content">
          <div>
            <h2>Add Quick Link</h2>
            <p>URL</p>
            <input type="text" onChange={(e) => setUrl(e.target.value)} />
            <p>Folder</p>
            <div className="save-button__area">
              <input
                type="text"
                value={folderName}
                className="input_dropdown"
                onClick={() => setOpen(true)}
                style={{paddingLeft: '10px'}}
              />
              <div className={open ? "dropdown" : "hide_dropdown"}>
                {data.folder.map((item) => {
                  return (
                    <p
                      key={item.id}
                      style={{
                        padding: "3px",
                      }}
                      className="dropdown_p"
                      onClick={() => selectFolder(item.id, item.name)}
                    >
                      {item.name}
                    </p>
                  );
                })}
              </div>
              <button onClick={saveHandler}>Save</button>
            </div>
          </div>

          <img src="" alt="" />
        </div>

        <div className="filter-bar">
          <div className="filter-bar__left">
            <input type="text" placeholder="Search" />
            <button>
              <GrFilter size={20} />
            </button>
          </div>

          <div className="filter-bar__right">
            <p>Add Link</p>
            <button>
              <BsGridFill size={20} />
            </button>
            <button>
              <MdFormatListBulleted size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentContainer;
