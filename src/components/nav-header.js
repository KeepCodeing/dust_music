import React, { memo } from "react";
import { NavLink } from "react-router-dom";

export default memo(function NavHeader() {
  return (
    <div>
      <NavLink to="/" exact>
        发现音乐
      </NavLink>
      <NavLink to="/my">我的音乐</NavLink>
      <NavLink to="/friend">关注</NavLink>
    </div>
  );
});
