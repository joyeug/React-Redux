import { combineReducers } from "redux";
import { SELECT_DATE } from "../../actions/date/select";

const selected = (stateDefault = 2021, action) => {
  switch (action.type) {
    case SELECT_DATE:
      return action.payload;
    default:
      return stateDefault;
  }
};

export default combineReducers({ selected });
