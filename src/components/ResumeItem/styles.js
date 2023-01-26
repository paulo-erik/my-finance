import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222831;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #222831;
  padding: 15px 15px;
  width: 30%;

  @media (max-width: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }

    span {
      font-size: 20px;
    }

    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 20px auto;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 25px;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
`;