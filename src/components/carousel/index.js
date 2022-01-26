import React, { memo, useRef } from "react";

import { BannerLeft, BannerRight, BannerWrapper } from "./style";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default memo(function Swiper(props) {
  const { bgChange, renderItem } = props;

  const carouselRef = useRef();

  const {
    showCtrBtn = true,
    showLeftContent = true,
    showRightContent = true,
    carouselStyle = {},
    showDots = true,
    autoPlay = true,
  } = props;

  // 轮播图宽高
  // 切换按钮样式
  // carousel中存放的组件
  // 数据源这里不考虑，把它做成一个只提供样式的插槽即可
  // 图片切换事件交给父组件处理

  return (
    <BannerWrapper carouselStyle={carouselStyle}>
      <div className="content">
        {showCtrBtn && (
          <Button
            onClick={(e) => carouselRef.current.prev()}
            ghost
            className="controller-btn left"
          >
            <LeftOutlined />
          </Button>
        )}
        {showLeftContent && (
          <BannerLeft contentLeft={carouselStyle.contentLeft}>
            <Carousel
              effect="fade"
              beforeChange={bgChange}
              autoplay={autoPlay}
              ref={carouselRef}
              dots={showDots}
            >
              {typeof renderItem === "function" && renderItem()}
            </Carousel>
          </BannerLeft>
        )}
        {showRightContent && (
          <BannerRight contentRight={carouselStyle.contentRight}></BannerRight>
        )}
        {showCtrBtn && (
          <Button
            onClick={(e) => carouselRef.current.next()}
            ghost
            className="controller-btn right"
          >
            <RightOutlined />
          </Button>
        )}
      </div>
    </BannerWrapper>
  );
});
