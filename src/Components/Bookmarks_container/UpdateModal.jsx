import React, { useState } from "react";
import Modal from "react-modal";
import client from "../../api/api_loginSignUp";
import { useDispatch, useSelector } from "react-redux";
import './updateModal.css'
import { useMemo } from "react";

const UpdateModal = ({editing, editingID, closeModal}) => {
    const dispatch = useDispatch()
    const {bookmarks} = useSelector((state) => state.bookmarkReducer);
    const [bookmarkObj] = bookmarks.filter((bookmark) => {
        return bookmark.id === editingID
    })
    const [url, setUrl] = useState(bookmarkObj.url)
    const [name, setName] = useState(bookmarkObj.name)
    console.log(bookmarkObj)

    const updateHandler = async () => {
        const response = await client.put("update-details", {
          bookmarkId: editingID,
          name: name,
          url: url
        })
        
        const updatedBookmark = bookmarks.map((bookmark) => {
            if(bookmark.id === editingID){
                return {...bookmark, url: url, name: name}
            } else {
                return bookmark
            }
        })

        dispatch({ type: "updateFavorite", payload: updatedBookmark });
        closeModal()
    }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal style={customStyles} isOpen={editing}>
      <div className="updateModal">
        <button className="close" onClick={closeModal}>
          x
        </button>
        <h1>Update Link</h1>
        <p>Link Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Link URL</p>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="save" onClick={updateHandler}>Update</button>
      </div>
    </Modal>
  );
};

export default UpdateModal;
