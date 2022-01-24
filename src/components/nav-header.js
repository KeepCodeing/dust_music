import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import Routes from "../router";

export default memo(function NavHeader() {
  return (
    <div>
      <NavLink to="/" exact>
        发现音乐
      </NavLink>
      <NavLink to="/my">我的音乐</NavLink>
      <NavLink to="/friend">关注</NavLink>

      {renderRoutes(Routes)}
    </div>
  );
});
