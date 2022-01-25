import React, { memo, useEffect } from "react";
import { connect } from "react-redux";

import { getTopBannerAction } from "./store/actionCreators";

const Recommend = memo(function Recommend(props) {
  const { getTopBanner } = props;

  useEffect(() => getTopBanner(), [getTopBanner]);

  return <div>Recommend</div>;
});

const stateToProps = (state) => ({
  topBanner: state.recommend.topBanner,
});

const dispatchToProps = (dispatch) => ({
  getTopBanner() {
    dispatch(getTopBannerAction());
  },
});

export default connect(stateToProps, dispatchToProps)(Recommend);
