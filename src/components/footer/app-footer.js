import styled from "styled-components";
import footer_icons from "../../assets/img/footer-icons.jpg";

export const FooterWrapper = styled.div`
  background-color: rgb(242, 242, 242);
  padding: 20px 0 40px 0;
  border-top: 1px solid rgb(211, 211, 211);

  .content {
    width: 80%;
    min-width: 1300px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
`;

export const FooterLeft = styled.div`
  width: 50%;
  height: 100%;
  font-size: 14px;

  .links {
    color: rgb(153, 153, 153);
    padding-right: 10px;

    ::after {
      content: "";
      border-right: 1px solid rgb(211, 211, 211);
      padding-left: 10px;
      height: 100%;
    }

    :last-of-type {
      ::after {
        border: none !important;
      }
    }
  }

  .infos {
    :first-of-type {
      margin-top: 10px;
    }
  }
`;

export const FooterRight = styled.div`
  width: 50%;
  height: 100%;

  .footer-icon-wrapper {
    width: 420px;
    margin-left: 50px;
    margin-top: 20px;
    height: 70px;
    background-image: url(${footer_icons});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
