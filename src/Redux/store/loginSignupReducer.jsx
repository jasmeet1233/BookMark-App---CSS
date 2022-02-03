//isLoading & errorMsg

const initialStore = {
  userData: {},
  isLoading: false,
  errorMessage: "",
  folder: [],
  isModalOpen: false,
  deleteModal: false,
  deleteID: "",
  bookmarks: [],
  folderID: "",
  bookmarkLoading: false,
  count: 0
};

export const bookmarkReducer = (state = initialStore, action) => {
  if (action.type === "Success") {
    return { ...state, userData: action.payload, isLoading: false };
  }

  if (action.type === "Error") {
    console.log(action);
    return { ...state, errorMessage: action.payload.message, isLoading: false };
  }

  if (action.type === "SignUp_Success") {
    return { ...state, userData: action.payload, isLoading: false };
  }

  if (action.type === "SignUp_Fail") {
    return {
      ...state,
      errorMessage: "Email Id already in use",
      isLoading: false,
    };
  }

  if (action.type === "Reset") {
    return { ...initialStore };
  }

  if (action.type === "Loading") {
    return { ...state, isLoading: true };
  }

  if (action.type === "userDetails") {
    return { ...state, userData: action.payload };
  }

    if (action.type === "FoldersAdded") {
      return { ...state, folder: action.payload, isModalOpen: false };
    }

  if (action.type === "openModal") {
    return { ...state, isModalOpen: true };
  }
  
  if(action.type === 'CloseModal'){
    return { ...state, isModalOpen: false };
  }

    if (action.type === "openDeleteModal") {
      return { ...state, isModalOpen: true, deleteModal: true };
    }

    if(action.type === 'addDeleteID') {
      console.log(action.deleteID)
      console.log(action.payload)
      return { ...state, deleteID: action.payload };
    }

    if (action.type === "deleteHandler") {
      const updated_folder = state.folder.filter((item) => {
        return item.id !== action.payload
      })
      return {...state, folder: updated_folder}
    }

    if(action.type === 'setFolderID'){
      return { ...state, folderID: action.payload, bookmarkLoading: true };
    }

    if(action.type === 'bookmark_Fetch_Success'){
      return { ...state, bookmarkLoading: false, bookmarks: action.payload};
    }

    if (action.type === "increaseCount"){
      return {...state, count: state.count + 1}
    }
    
    if (action.type === "updateFavorite") {
      return { ...state, bookmarks: action.payload };
    } 
    
    else return state;
};
