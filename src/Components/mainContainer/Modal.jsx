import React, { useState } from "react";
import Modal from "react-modal";
import client from "../../api/api_loginSignUp";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const ModalWindow = () => {
  const dispatch = useDispatch();
  const [folderName, setFolderName] = useState("");
  const { isModalOpen, deleteModal, deleteID } = useSelector((state) => state.bookmarkReducer);
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

  const confirmDeletion = async () => {
    // const token = await JSON.parse(localStorage.getItem("bookmarkToken"));
    // const data = { folderId: id };
    const response = await client.delete("/folder", { data: { folderId: deleteID } });
    dispatch({ type: 'deleteHandler', payload: deleteID });
    dispatch({ type: "CloseModal" });
  }

  const submitHandler = async () => {
    if (!folderName) return;
    const response = await client.post("/folder", {
      name: folderName,
      id: uuidv4(),
    });
    console.log(response.data);
    const response2 = await client.get("/folders");
    dispatch({ type: "FoldersAdded", payload: response2.data });
  };

  if (deleteModal) {
    return (
      <Modal isOpen={isModalOpen} style={customStyles}>
        <div className="deleteModal">
          <p>Confirm Delete</p>
          <button onClick={confirmDeletion}>Yes</button>
          <button onClick={() => dispatch({ type: "CloseModal" })}>No</button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isModalOpen} style={customStyles}>
      <h3 style={{paddingBottom: '5px'}}>Folder Name</h3>
      <input type="text" onChange={(e) => setFolderName(e.target.value)} style={{paddingLeft: '5px', marginRight: '5px'}}/>
      <button
        onClick={submitHandler}
        style={{
          border: "1px solid purple",
          color: "purple",
          backgroundColor: "transparent",
          padding: "1px",
          borderRadius: "6px",
          marginLeft: "2px",
        }}
      >
        Create Folder
      </button>
      <button
        style={{
          position: "absolute",
          top: "2px",
          right: "5px",
          color: "purple",
          backgroundColor: "transparent",
          border: "none",
        }}
        onClick={() => dispatch({ type: "CloseModal" })}
      >
        X
      </button>
    </Modal>
  );
};

export default ModalWindow;
