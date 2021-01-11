import { v4 as uuidv4 } from "uuid";
import { ADD_SYNC_POST } from "./../constants";

export const addSyncPost = (content) => {
  return {
    type: ADD_SYNC_POST,
    payload: {
      id: uuidv4(),
      ...content,
    },
  };
};
