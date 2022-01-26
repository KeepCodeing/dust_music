import styled from "styled-components";

export const RecommendWrapper = styled.div`
  background-color: rgb(245, 245, 245);
`;

export const RecommendContent = styled.div`
  width: 984px;
  min-height: 700px;
  height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

  display: flex;
  justify-content: center;
`;

export const ContentLeft = styled.div`
  width: 75%;
  height: 100%;
  padding: 20px 20px 40px;

  > div {
    margin-top: 40px;

    :first-of-type {
      margin-top: 0;
    }
  }
`;

export const ContentRight = styled.div`
  width: 25%;
  height: 100%;
  background-color: green;
`;
