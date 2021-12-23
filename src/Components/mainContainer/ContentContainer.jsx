import React, {useState} from "react";
import { BsGridFill } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { GrFilter } from "react-icons/gr";
import { useSelector } from "react-redux";
import client from "../../API_Calls/api";
import axios from "axios";
import Modal from 'react-modal'
import ModalWindow from "./Modal";

const ContentContainer = () => {
  const fId = "7c28dc57-6d97-45b0-8632-11d3b6d671a0";
  const [ url, setUrl] = useState('');
  const [folder, setFolder] = useState('prime');
  const data = useSelector(state => state.bookmarkReducer);


  const saveHandler = async() => {
    try {
      const response = await client.post("bookmark", 
         {
          folderId: fId,
          url: url,
          name: "bookmark",
        },
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
    <ModalWindow />
      <div className="content-container">
        <div className="top-content">
          <div>
            <h2>Add Quick Link</h2>
            <p>URL</p>
            <input type="text" onChange={(e) => setUrl(e.target.value)} />
            <p>Folder</p>
            <div className="save-button__area">
              <input type="text" value={folder} onChange={() => {}} />
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
