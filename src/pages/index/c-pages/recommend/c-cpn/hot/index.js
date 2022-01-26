import React, { memo, useEffect } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";

import { getHotRecommendAction } from "../../store/actionCreators";
import { HOT_RECOMMEND_LIMIT } from "../../../../../../common/constants";

import TitleBanner from "../../../../../../components/title-banner";
import { HotWrapper } from "./style";
import CoverList from "../../../../../../components/cover-list";

export default memo(function Hot() {
  const dispatch = useDispatch();
  const { hotRecommend } = useSelector(
    (state) => ({
      hotRecommend: state.getIn(["recommend", "hotRecommend"]),
    }),
    shallowEqual
  );

  useEffect(
    () => dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT)),
    [dispatch]
  );

  return (
    <HotWrapper>
      <TitleBanner
        title="热门推荐"
        links={["华语", "流行", "摇滚", "民谣", "电子"]}
      ></TitleBanner>
      <CoverList songList={hotRecommend} />
    </HotWrapper>
  );
});
