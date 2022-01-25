import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannerAction } from "./store/actionCreators";

export default memo(function Recommend(props) {
  const dispatch = useDispatch();
  const { topBanner } = useSelector(
    (state) => ({ topBanner: state.getIn(["recommend", "topBanner"]) }),
    shallowEqual
  );

  useEffect(() => dispatch(getTopBannerAction()), [dispatch]);

  console.log(topBanner);

  return <div>Recommend:</div>;
});
