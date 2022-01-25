import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";

import { discoverNavLink } from "../../common/local-data";

import { DiscoverWrapper, DiscoverNav } from "./components/discover-styled";

const Index = memo(function Index(props) {
  const navLinks = discoverNavLink.map((item) => (
    <NavLink key={item.title} to={item.link}>
      {item.title}
    </NavLink>
  ));

  return (
    <DiscoverWrapper>
      <div className="top">
        <DiscoverNav>{navLinks}</DiscoverNav>
      </div>
      <div className="content">{renderRoutes(props.route.routes)}</div>
    </DiscoverWrapper>
  );
});

export default Index;
