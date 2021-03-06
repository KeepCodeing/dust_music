import React, { memo } from "react";
import { CoverFace, CoverWrapper } from "./style";

import calPlay from "../../utils/cal-play";

export default memo(function CoverCard(props) {
  const { title, picUrl, playCount, showAction = true } = props;

  return (
    <CoverWrapper coverStyle={props.coverStyle}>
      <CoverFace coverFaceStyle={props.coverFaceStyle}>
        <img
          className="cover-img"
          alt="title"
          src={`${picUrl}?param=100x100`}
        ></img>
        <a className="cover-mask" href="/discover">
          {" "}
        </a>
        {showAction && (
          <div className="cover-action">
            <div>
              <span className="icon-headset"></span>
              {calPlay(playCount)}
            </div>
            <span className="icon-play"></span>
          </div>
        )}
      </CoverFace>
      <p className="title">{title}</p>
    </CoverWrapper>
  );
});
