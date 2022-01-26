import styled from "styled-components";
import coverall from "../../assets/img/coverall.png";
import iconall from "../../assets/img/iconall.png";

export const CoverWrapper = styled.div.attrs({
  defaultStyle: {
    width: "140px",
  },
})`
  ${(props) => ({ ...props.defaultStyle, ...props.coverStyle })}

  .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    overflow: hidden;
  }
`;

export const CoverFace = styled.div.attrs({
  defaultStyle: {
    position: "relative",
    height: "140px",
    width: "100%",
  },
})`
  ${(props) => ({ ...props.defaultStyle, ...props.coverFaceStyle?.wrapper })}

  .cover-img {
    height: 100%;
    width: 100%;
  }

  .cover-mask {
    height: 100%;
    width: ${(props) => props.coverFaceStyle?.bgWidth};
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${coverall});

    background-position: ${(props) => props.coverFaceStyle?.bgPos || "0 0"};
  }

  .cover-action {
    position: absolute;
    bottom: 0;
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    color: #ccc;

    span {
      display: inline-block;
    }

    .icon-headset {
      width: 14px;
      height: 11px;
      background-position: 0 -24px;

      background-image: url(${iconall});
      margin-right: 4px;
    }

    .icon-play {
      width: 16px;
      height: 17px;
      background-position: 0 0;

      background-image: url(${iconall});
    }
  }
`;
