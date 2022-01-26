import * as actions from "./constants";
import {
  getHotRecommend,
  getNewAlbum,
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

export const getNewAlbumAction = function (limit) {
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      dispatch({ type: actions.CHANGE_NEW_ALBUM, newAlbum: res.data.albums });
    });
  };
};
