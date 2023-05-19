import styled from "styled-components"

export const CustomInput = styled.div`
  input {
    border-radius: 30px;
    height: 30px;
    width: 600px;
    margin-bottom: 15px;
    background-color: ${(props) => props.color};
    padding-left: 15px;
  }

  @media screen and (max-width: 360px) {
    input {
      width: 125px;
      font-size: 15px;
    }
  }
`;