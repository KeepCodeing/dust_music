import styled from "styled-components";

export const CoverListWrapper = styled.div.attrs({
  defaultStyle: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  defaultCoverWrapper: {
    margin: "20px 0",
  },
})`
  ${(props) => ({ ...props.defaultStyle, ...props.coverListStyle?.wrapper })}

  > div {
    ${(props) => ({
      ...props.defaultCoverWrapper,
      ...props.coverListStyle?.coverWrapper,
    })};
  }
`;
