import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { HeaderLeft, HeaderRight, HeaderWrapper } from "./app-header";
import { headerLinks } from "../../common/local-data";

export default memo(function NavHeader() {
  const navLink = headerLinks.map((item) => (
    <NavLink
      activeClassName="active-link"
      className="link-item"
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
        <HeaderRight>
          <Input
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
            className="rounded-3xl"
          />
          <Button
            type="default"
            className="mx-7 rounded-3xl text-gray-300 hover:text-gray-500 border-gray-500 "
          >
            创作者中心
          </Button>
          <Button
            type="default"
            className="rounded-3xl hover:text-gray-500 text-gray-500 border-none"
          >
            登陆
          </Button>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
