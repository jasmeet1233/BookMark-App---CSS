import React, {useState} from "react";
import Modal from "react-modal";
import client from "../../API_Calls/api";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const ModalWindow = () => {
    const dispatch = useDispatch();
    const [folderName, setFolderName] = useState('');
    const {isModalOpen} = useSelector(state => state.bookmarkReducer);
    

    const submitHandler = async() => {
        if(!folderName) return
         const response = await client.post('/folder', {name: folderName, id: uuidv4()});
         console.log(response.data)
         const response2 = await client.get("/folders");
         dispatch({ type: "FoldersAdded", payload: response2.data });
    }

    return (
      <Modal isOpen={isModalOpen}>
        <h3>Folder Name</h3>
        <input type="text"  onChange={e => setFolderName(e.target.value)}/>
        <button onClick={submitHandler}>Create Folder</button>

      </Modal>
    );
}

export default ModalWindow;
