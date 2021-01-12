import { v4 as uuidv4 } from "uuid";
import { ADD_SYNC_POST, ADD_ASYNC_POST } from "./../constants";
import { showSpinner } from "./alertActions";

export const addSyncPost = (content) => {
  return {
    type: ADD_SYNC_POST,
    payload: {
      id: uuidv4(),
      ...content,
    },
  };
};

export const fetchAsyncPosts = () => {
  return async (dispatch) => {
    dispatch(showSpinner(true));
    const jsonPosts = await fetch(
      "http://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const posts = await jsonPosts.json();
    dispatch({
      type: ADD_ASYNC_POST,
      payload: [...posts],
    });
    dispatch(showSpinner(false));
  };
};
