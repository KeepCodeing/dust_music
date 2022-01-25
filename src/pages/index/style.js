import styled from "styled-components";

export const DiscoverWrapper = styled.div``;

export const DiscoverNav = styled.div`
  height: 34px;
  background-color: rgb(194, 12, 12);
  padding-left: 347px;
  font-size: 14px;

  a {
    display: inline-block;
    padding: 2px 20px;
    margin: 0 20px;
    color: #fff;
    border-radius: 20px;

    :hover,
    &.active {
      background-color: #9b0909;
    }
  }
`;
