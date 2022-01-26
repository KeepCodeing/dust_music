import styled from "styled-components";
import index from "../../assets/img/index.png";

export const TitleBannerWrapper = styled.div`
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;

  background-image: url(${index});
  background-repeat: no-repeat;

  .title {
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    margin-right: 20px;
  }

  .tab {
    margin-left: 10px;
    color: #666;

    transform: translateY(-3px);
    display: inline-block;

    ::after {
      content: "";
      border-right: 1px solid #666;
      padding-right: 10px;
    }

    :last-child::after {
      border: none;
    }
  }
`;
