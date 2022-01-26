import React, { memo } from "react";
import CoverCard from "../cover-card";
import { CoverListWrapper } from "./style";

export default memo(function CoverList(props) {
  const { songList } = props;

  return (
    <CoverListWrapper>
      {songList.map((item) => (
        <CoverCard
          key={item.id}
          title={item.name}
          picUrl={item.picUrl}
          playCount={item.playCount}
        />
      ))}
    </CoverListWrapper>
  );
});
