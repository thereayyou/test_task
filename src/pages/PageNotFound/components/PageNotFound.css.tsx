import styled from "styled-components";

export const NotFoundMain = styled.div`
    height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h1 {
    font-size: 50px;
    color: ${(props) => props.color};
  }
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotFoundDescription = styled.div`
  padding-top: 50px;
  padding-bottom: 25px;
  color: ${(props) => props.color}
`