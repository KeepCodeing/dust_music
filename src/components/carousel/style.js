import styled from "styled-components";

// 要提供的样式数据：
// 是否存在背景图（banner）
// 轮播图高度
// 内容区宽高
// 切换按钮的样式
// 左侧内容与右侧内容宽高

const check = (a, b) => a || b;

/**
 * 
 
 */

export const BannerWrapper = styled.div.attrs({
  deafultCarouselStyle: {
    ctrBtnStyle: {
      color: "white !important",
      borderRadius: "0",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "30px",
      padding: "0 10px",
      height: "80px",
      border: "0",
    },
    btnLeft: { left: "240px" },
    btnRight: { right: "240px" },
    bannerHeight: "285px",
    contentWidth: "982px",
  },
})`
  position: relative;

  ${(props) => props.carouselStyle?.bgImg}

  .content {
    width: ${(props) =>
      check(
        props.carouselStyle?.contentWidth,
        props.deafultCarouselStyle.contentWidth
      )};
    height: ${(props) =>
      check(
        props.carouselStyle?.bannerHeight,
        props.deafultCarouselStyle.bannerHeight
      )};

    margin: 0 auto;
    display: flex;

    background-color: red;

    .controller-btn {
      ${(props) => ({
        ...props.deafultCarouselStyle.ctrBtnStyle,
      })}

      &.left {
        ${(props) =>
          check(
            props.carouselStyle.btnLeft,
            props.deafultCarouselStyle.btnLeft
          )}
      }

      &.right {
        ${(props) =>
          check(
            props.carouselStyle.btnRight,
            props.deafultCarouselStyle.btnRight
          )}
      }

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
  width: ${(props) => props.contentLeft?.width};
  height: 100%;

  img {
    height: ${(props) => props.contentLeft?.bannerHeight};
  }
`;

export const BannerRight = styled.div`
  width: ${(props) => props.contentRight?.width};
  height: 100%;

  background: url(${(props) => props.contentRight?.bgImg}) no-repeat 0 0;
`;
