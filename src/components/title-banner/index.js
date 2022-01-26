import React, { memo } from "react";
import { TitleBannerWrapper } from "./style";

export default memo(function TitleBanner(props) {
  const { title, links = [] } = props;

  return (
    <TitleBannerWrapper>
      <a className="title" href="/discover">
        {title}
      </a>
      {links.map((item) => (
        <a key={item} href="/discover" className="tab">
          {item}
        </a>
      ))}
    </TitleBannerWrapper>
  );
});
