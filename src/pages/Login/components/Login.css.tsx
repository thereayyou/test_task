import styled from "styled-components";

export const LoginMain = styled.div`
  width: 500px;
  height: 500px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  border-radius: 30px;
  
  h1 {
    padding-bottom: 100px;
  }
  
  input {
    border-radius: 30px;
    height: 30px;
    min-width: 400px;
    margin-left: auto;
    margin-bottom: 15px;
    background-color: lightgray;
    padding-left: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
`

export const LoginTitle = styled.div`
  color: white;
`

export const LoginButtonContainer = styled.div`
  margin-top: 25px;
`

