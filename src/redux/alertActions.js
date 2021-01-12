import { SHOW_SPINNER } from "./../constants";

export const showSpinner = (flag) => {
  return {
    type: SHOW_SPINNER,
    payload: flag,
  };
};
