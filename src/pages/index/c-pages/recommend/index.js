import React, { memo } from "react";
import Banner from "./c-cpn/banner";
import { RecommendWrapper } from "./style";

export default memo(function Recommend() {
  return (
    <RecommendWrapper>
      <Banner />
    </RecommendWrapper>
  );
});
