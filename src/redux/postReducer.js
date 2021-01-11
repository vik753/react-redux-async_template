import { ADD_SYNC_POST } from "./../constants";

const initialState = {
  syncPosts: [],
  asyncPosts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SYNC_POST:
      return {
        ...state,
        syncPosts: [...state.syncPosts, action.payload],
      };
    default:
      return state;
  }
};

export default postReducer;
