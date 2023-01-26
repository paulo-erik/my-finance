import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 15px;
  color: #EEEEEE;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    width: 18px;
    height: 18px;
    cursor: pointer;
    transition: all 0.3s;
  }

  svg:hover {
    color: #00ADB5;
  }
`;