import styled from "styled-components";

export const HeaderMain = styled.div`
  width: 100%;
  max-height: 150px;
  color: black;
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: black;

  @media(max-width: 360px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  
  @media(max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const HeaderContainer = styled.div`
  max-width: 1440px;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 360px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  @media(max-width: 769px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: initial;
  }
`

export const HeaderRightPart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  gap: 15px;

  @media(max-width: 360px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
  }
`
