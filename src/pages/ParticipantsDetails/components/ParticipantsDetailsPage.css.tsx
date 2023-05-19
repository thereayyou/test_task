import styled from "styled-components"

export const ParticipantsDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 40px;

  input {
    border-radius: 5px;
    height: 30px;
    width: 600px;
    margin-bottom: 15px;
    background-color: #d1d1d1;
    padding-left: 15px;
  }
  
`

export const DetailMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  background: #363636;
  padding: 25px 100px 50px 100px;
  :nth-last-child(-n+2) {
    flex-direction: row;
    justify-content: start;
  }
`

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: white;
`

export const DetailItemTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  color: white;
`