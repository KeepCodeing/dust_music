import * as actions from "./constants";
import { getTopBanner } from "../../../../../services/recommend";

export const getTopBannerAction = function () {
  return (dispatch) => {
    getTopBanner().then((res) =>
      dispatch({ type: actions.CHANGE_TOP_BANNER, topBanner: res.data.banners })
    );
  };
};
