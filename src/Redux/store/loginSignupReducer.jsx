//isLoading & errorMsg

const initialStore = {
  userData: {},
  // error: false,
  // redirect: false,
  isLoading: false,
  errorMessage: "",
  folder: [],
  isModalOpen: false,
  deleteModal: false
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

  if(action.type === 'FoldersAdded'){
    return {...state, folder: action.payload, isModalOpen: false};
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

  return state;
};
