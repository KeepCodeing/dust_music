import * as actions from "./constants";
import { Map } from "immutable";

const initialState = Map({
  topBanner: [],
});

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_TOP_BANNER:
      return state.set("topBanner", action.topBanner);

    default:
      return state;
  }
};

export default reducer;
