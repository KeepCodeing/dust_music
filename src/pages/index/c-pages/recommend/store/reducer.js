import * as actions from "./constants";

const initialState = {
  topBanner: [],
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_TOP_BANNER:
      return { ...state, topBanner: action.topBanner };

    default:
      return state;
  }
};

export default reducer;
