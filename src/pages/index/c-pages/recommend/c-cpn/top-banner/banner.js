import React, { memo, useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannerAction } from "../../store/actionCreators";

import Swiper from "../../../../../../components/carousel";

import download from "../../../../../../assets/img/download.png";

export default memo(function Banner(props) {
  const dispatch = useDispatch();
  const [curBgIdx, setBgIdx] = useState(0);

  const { topBanner } = useSelector(
    (state) => ({ topBanner: state.getIn(["recommend", "topBanner"]) }),
    shallowEqual
  );

  const bgChange = useCallback((from, to) => setBgIdx(to), []);

  const renderItem = useCallback(() => {
    return topBanner.map((item) => (
      <div key={item.imageUrl}>
        <img
          style={{ height: "285px" }}
          src={item.imageUrl}
          alt={item.typeTitle}
        />
      </div>
    ));
  }, [topBanner]);

  useEffect(() => dispatch(getTopBannerAction()), [dispatch]);

  const bgImg = {
    backgroundImage: `url(${topBanner[curBgIdx]?.imageUrl}?imageView&blur=40x20)`,
    backgroundSize: "6000px",
    backgroundPosition: "center center",
  };

  return (
    <Swiper
      bgChange={bgChange}
      renderItem={renderItem}
      carouselStyle={{
        bgImg: bgImg,
        contentRight: { bgImg: download, width: "254px" },
        contentLeft: { width: "735px", bannerHeight: "183px" },
      }}
    ></Swiper>
  );
});

/*
<BannerWrapper
      bgImg={`${topBanner[curBgIdx]?.imageUrl}?imageView&blur=40x20`}
    >
      <div className="content">
        <Button
          onClick={(e) => carouselRef.current.prev()}
          ghost
          className="controller-btn"
          style={{ left: "240px" }}
        >
          <LeftOutlined />
        </Button>
        <BannerLeft>
          <Carousel
            effect="fade"
            beforeChange={bgChange}
            autoplay
            ref={carouselRef}
          >
            {topBanner.map((item) => (
              <div key={item.imageUrl}>
                <img
                  style={{ height: "285px" }}
                  src={item.imageUrl}
                  alt={item.typeTitle}
                />
              </div>
            ))}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <Button
          onClick={(e) => carouselRef.current.next()}
          ghost
          className="controller-btn"
          style={{ right: "240px" }}
        >
          <RightOutlined />
        </Button>
      </div>
    </BannerWrapper>
*/
