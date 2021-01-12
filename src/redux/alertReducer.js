import { SHOW_SPINNER } from "./../constants";

const initialState = {
  showSpinner: false,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, showSpinner: action.payload };
    default:
      return state;
  }
};

export default alertReducer;
