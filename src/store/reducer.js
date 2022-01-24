import { TEST } from "./constants";

function reducer(state = { test: 0 }, action) {
  switch (action.type) {
    case TEST:
      return { ...state, test: state.test + 1 };
    default:
      return state;
  }
}

export default reducer;
