import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./bookmarks.css";
import { AiOutlineHeart, AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import client from "../../api/api_loginSignUp";
import axios from "axios";
import UpdateModal from "./UpdateModal";

const BookMarks = ({display}) => {
  const [editing, setEditing] = useState(false);
  const [editingID, setEditingID] = useState("");

  const { bookmarks, bookmarkLoading, count, folderID } = useSelector(
    (state) => state.bookmarkReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("count chaned");
  }, [count]);

  useEffect(() => {
    dispatch({ type: "setFolderID", payload: folderID });
    setTimeout(async () => {
      const response = await client.get("folder-bookmarks", {
        params: { folderId: folderID },
      });
      console.log(response, "---response");
      dispatch({ type: "bookmark_Fetch_Success", payload: response.data });
    }, 800);
  }, [count]);

  //params

  const toggleFavorite = async (id) => {
    const response = await client.put("toggle-favorite", { bookmarkId: id });
    const updatedbookmarks = bookmarks.map((bookmark) => {
      if (bookmark.id === id) {
        return { ...bookmark, isFavorite: !bookmark.isFavorite };
      } else {
        return bookmark;
      }
    });
    dispatch({ type: "updateFavorite", payload: updatedbookmarks });
  };

  const deleteHandler = async (id) => {
    const answer = confirm("Confirm deletion");
    if (answer) {

      const updatedbookmarks = bookmarks.filter((bookmark) => {
        return bookmark.id !== id;
      });
      dispatch({ type: "updateFavorite", payload: updatedbookmarks });
    }
  };

  const editHandler = (id) => {
    setEditing(true);
    setEditingID(id);
  };

  const closeModal = () => {
    console.log("-----closemodal working-----");
    setEditing(false);
  };

  if (bookmarkLoading) {
    return <h3>Loading...</h3>;
  }

  if (bookmarks.length === 0) {
    return <h3>No bookmarks</h3>;
  }

  return (
    <>
      {editing && (
        <UpdateModal
          editing={editing}
          editingID={editingID}
          closeModal={closeModal}
        />
      )}
      {bookmarks.map((bookmark) => {
        return (
          <div
            className={
              display === "flex" ? "bookmark_container" : "bookmark_container"
            }
            key={bookmark.id}
          >
            <img
              src={bookmark.imageUrl}
              alt=" image"
              className={
                display === "flex" ? "bookmark_Image" : "bookmark_Image"
              }
            />
            <div className="bookmark_desc">
              <h4>{bookmark.name}</h4>
              <p className={display === "flex" ? "description" : "description"}>
                {bookmark.description}
              </p>
            </div>
            {display === "flex" && (
              <div className="crud_buttons">
                <div onClick={() => toggleFavorite(bookmark.id)}>
                  <AiOutlineHeart
                    size="25"
                    style={
                      bookmark.isFavorite
                        ? { color: "red" }
                        : { color: "black" }
                    }
                  />
                </div>
                <div onClick={() => editHandler(bookmark.id)}>
                  <AiOutlineEdit size="25" />
                </div>
                <div onClick={() => deleteHandler(bookmark.id)}>
                  <AiFillDelete size="25" />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default BookMarks;
