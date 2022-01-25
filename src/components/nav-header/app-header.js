import styled from "styled-components";
// 在styled-components中引入图片
import topbar from "../../assets/img/topbar.png";

export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 17px;
  color: #ccc !important;
  background-color: #242424;
  .content {
    height: 70px;
    width: 80%;
    min-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .logo {
    width: 176px;
    height: 69px;
    background-position: 0 0;
    background-image: url(${topbar});
  }

  .links {
    line-height: 70px;

    .link-item {
      padding: 0 20px;
      display: inline-block;
      height: 100%;
      position: relative;

      :last-of-type {
        ::after {
          content: "";
          background-position: -190px 0;
          background-image: url(${topbar});
          position: absolute;
          width: 28px;
          height: 19px;
          right: -15px;
          top: 20px;
        }
      }

      :hover {
        color: #fff !important;
      }
    }

    .active-link {
      background-color: #000;
      color: #fff !important;

      ::before {
        content: "";
        position: absolute;
        background-image: url(${topbar});
        width: 12px;
        height: 7px;
        margin-left: -6px;
        overflow: hidden;
        background-position: -226px 0;
        bottom: -2px;
        left: 50%;
        transform: translateX(50%);
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
