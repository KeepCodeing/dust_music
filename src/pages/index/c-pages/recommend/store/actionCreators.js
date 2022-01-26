import * as actions from "./constants";
import {
  getHotRecommend,
  getTopBanner,
} from "../../../../../services/recommend";

export const getTopBannerAction = function () {
  return (dispatch) => {
    getTopBanner().then((res) =>
      dispatch({ type: actions.CHANGE_TOP_BANNER, topBanner: res.data.banners })
    );
  };
};

export const getHotRecommendAction = function (limit) {
  return (dispatch) => {
    getHotRecommend(limit).then((res) =>
      dispatch({
        type: actions.CHANGE_HOT_RECOMMEND,
        hotRecommend: res.data.result,
      })
    );
  };
};
