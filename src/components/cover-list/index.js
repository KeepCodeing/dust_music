import React, { memo } from "react";
import CoverCard from "../cover-card";
import { CoverListWrapper } from "./style";

export default memo(function CoverList(props) {
  const { songList } = props;

  return (
    <CoverListWrapper coverListStyle={props.coverListStyle}>
      {songList.map((item) => (
        <CoverCard
          key={item.id}
          title={item.name}
          picUrl={item.picUrl}
          playCount={item.playCount}
          coverStyle={props.coverStyle}
          coverFaceStyle={props.coverFaceStyle}
          showAction={props.showAction}
        />
      ))}
    </CoverListWrapper>
  );
});
