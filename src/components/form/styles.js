import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #222831;
  box-shadow: 0px 0px 5px #222831;
  color: #EEEEEE;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  button:hover {
    background-color: #78D4D9;
    color: #fff;
  }

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
`;

export const Input = styled.input`
  outline: none;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #EEEEEE;
  margin-top: 10px;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: #00ADB5;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: #EEEEEE;
  background-color: #00ADB5;
  transition: all 0.3s;
`;