import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getNewAlbumAction } from "../../store/actionCreators";
import { NEW_ALBUM_LIMIT } from "../../../../../../common/constants";

import { AlbumWrapper } from "./style";
import TitleBanner from "../../../../../../components/title-banner";
import Swiper from "../../../../../../components/carousel";
import CoverList from "../../../../../../components/cover-list";

export default memo(function NewAlbum() {
  const dispatch = useDispatch();
  const { newAlbum } = useSelector(
    (state) => ({
      newAlbum: state.getIn(["recommend", "newAlbum"]),
    }),
    shallowEqual
  );

  const songList = newAlbum.map((item, idx) => ({
    id: idx,
    title: item.artist?.name,
    picUrl: item?.blurPicUrl,
    playCount: 0,
  }));

  const renderItem = () => {
    return [
      [0, NEW_ALBUM_LIMIT / 2],
      [NEW_ALBUM_LIMIT / 2, NEW_ALBUM_LIMIT],
    ].map((item, idx) => {
      return (
        <CoverList
          key={idx}
          coverListStyle={{
            wrapper: {
              flexWrap: "nowrap",
              justifyContent: "flex-start",
            },
            coverWrapper: {
              margin: "20px 5px",
              flexGrow: "1",
              flexShrink: "0",
            },
          }}
          coverStyle={{
            width: "100px",
            display: "flex",
            justifyContent: "center",
          }}
          coverFaceStyle={{
            wrapper: { height: "100px", width: "100px" },
            bgPos: "0 -570px",
            bgWidth: "118px",
          }}
          songList={songList.slice(item[0], item[1])}
          showAction={false}
        ></CoverList>
      );
    });
  };

  useEffect(() => dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT)), [dispatch]);

  return (
    <AlbumWrapper>
      <TitleBanner title="新碟上架" />
      <Swiper
        showRightContent={false}
        carouselStyle={{
          contentWidth: "100%",
          bannerHeight: "auto",
          contentLeft: {
            width: "100%",
          },
          ctrBtnStyle: {
            zIndex: 1,
            color: "black !important",
            fontSize: "13px",
            background: "none !important",
          },
          btnLeft: { left: "5px" },
          btnRight: { right: "5px" },
          contentStyle: {
            background: "rgb(245,245,245)",
            padding: "20px 30px",
            marginTop: "20px !important",
            border: "1px solid #ccc",
          },
        }}
        renderItem={renderItem}
        showDots={false}
        autoPlay={false}
      />
    </AlbumWrapper>
  );
});
