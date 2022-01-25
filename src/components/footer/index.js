import React, { memo } from "react";

import { footerInfo } from "../../common/local-data";

import { FooterLeft, FooterRight, FooterWrapper } from "./app-footer";

export default memo(function Footer() {
  const links = footerInfo.links.map((item) => (
    <span className="links" key={item}>
      {item}
    </span>
  ));
  const infos = footerInfo.info.map((item) => (
    <p className="infos" key={item}>
      {item}
    </p>
  ));
  return (
    <FooterWrapper>
      <div className="content">
        <FooterLeft>
          {links}
          {infos}
        </FooterLeft>
        <FooterRight>
          <div className="footer-icon-wrapper"></div>
        </FooterRight>
      </div>
    </FooterWrapper>
  );
});
