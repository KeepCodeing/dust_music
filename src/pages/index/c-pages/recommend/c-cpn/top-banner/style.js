import styled from "styled-components";

import download from "../../../../../../assets/img/download.png";

export const BannerWrapper = styled.div.attrs({
  bannerHeight: "285px",
})`
  position: relative;
  background-image: url(${(props) => props.bgImg});
  background-size: 6000px;
  background-position: center center;

  .content {
    width: 982px;
    height: ${(props) => props.bannerHeight};
    margin: 0 auto;
    display: flex;

    .controller-btn {
      color: white !important;
      border-radius: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 30px;
      padding: 0 10px;
      height: 80px;
      border: 0;

      span {
        padding-bottom: 10px;
      }

      :hover {
        background: rgba(0, 0, 0, 0.3);
        border: 0;
        color: white;
      }
    }
  }
`;

export const BannerLeft = styled.div`
  width: 730px;
  height: 100%;

  img {
    height: ${(props) => props.bannerHeight};
  }
`;

export const BannerRight = styled.div`
  width: 254px;
  height: 100%;

  background: url(${download}) no-repeat 0 0;
`;
