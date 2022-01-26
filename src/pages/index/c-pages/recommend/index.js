import React, { memo } from "react";

import Hot from "./c-cpn/hot";
import NewAlbum from "./c-cpn/new-album";
import Banner from "./c-cpn/top-banner/banner";
import {
  ContentLeft,
  ContentRight,
  RecommendContent,
  RecommendWrapper,
} from "./style";

export default memo(function Recommend() {
  return (
    <RecommendWrapper>
      <Banner />
      <RecommendContent>
        <ContentLeft>
          <Hot />
          <NewAlbum />
        </ContentLeft>
        <ContentRight></ContentRight>
      </RecommendContent>
    </RecommendWrapper>
  );
});
