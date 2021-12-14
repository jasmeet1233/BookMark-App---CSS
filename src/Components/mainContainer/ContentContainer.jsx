import React from "react";
import { BsGridFill } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { GrFilter } from "react-icons/gr";

const ContentContainer = () => {
  return (
    <div className="content-container">
      <div className="top-content">
        <div>
          <h2>Add Quick Link</h2>
          <p>URL</p>
          <input type="text" />
          <p>Folder</p>
          <div className="save-button__area">
            <input type="text" />
            <button>Save</button>
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
  );
};

export default ContentContainer;
