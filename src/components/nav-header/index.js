import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { HeaderLeft, HeaderRight, HeaderWrapper } from "./app-header";
import { headerLinks } from "../../common/local-data";

export default memo(function NavHeader() {
  const navLink = headerLinks.map((item) => (
    <NavLink
      activeClassName="active-link"
      className="link-item"
      exact
      key={item.link}
      to={item.link}
    >
      {item.title}
    </NavLink>
  ));

  return (
    <HeaderWrapper>
      <div className="content">
        <HeaderLeft>
          <div className="logo"></div>
          <div className="links">{navLink}</div>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
