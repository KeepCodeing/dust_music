import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getNewAlbumAction } from "../../store/actionCreators";
import { NEW_ALBUM_LIMIT } from "../../../../../../common/constants";

import { AlbumWrapper } from "./style";
import TitleBanner from "../../../../../../components/title-banner";
import Swiper from "../../../../../../components/carousel";

export default memo(function NewAlbum() {
  const dispatch = useDispatch();
  const { newAlbum } = useSelector(
    (state) => ({
      newAlbum: state.getIn(["recommend", "newAlbum"]),
    }),
    shallowEqual
  );

  console.log(newAlbum);

  useEffect(() => dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT)), [dispatch]);

  return (
    <AlbumWrapper>
      <TitleBanner title="新碟上架" />
      <Swiper
        showRightContent={false}
        carouselStyle={{
          contentWidth: "100%",
        }}
      />
    </AlbumWrapper>
  );
});
