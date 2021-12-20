const initialStore = {
  userData: {},
  error: false,
  redirect: false,
  errorMessage: "",
};

export const bookmarkReducer = (state = initialStore, action) => {
  if (action.type === "Success") {
    return { ...state, userData: action.payload, redirect: true };
  }

  if (action.type === "Error") {
    console.log(action);
    return { ...state, error: true, errorMessage: action.payload.message };
  }

  if (action.type === "SignUp_Success") {
    return { ...state, userData: action.payload, redirect: true };
  }

  if (action.type === "SignUp_Fail") {
    return { ...state, errorMessage: "Email Id already in use", error: true };
  }

  if (action.type === "Reset") {
    return { ...initialStore };
  }
  return state;
};
