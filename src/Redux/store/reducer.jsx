const initialStore = {userData: {}, error: false, redirect: false};

export const bookmarkReducer = (state = initialStore, action) => {
  
  if(action.type === 'Success'){
    return ({...state, userData: action.payload, redirect: true})
  }
  if(action.type === "Error"){
    return ({...state, error: true})
  }

  if(action.type === 'SignUp_Success') {
    return ({...state})
  }
  return state;
};
