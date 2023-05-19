import styled from "styled-components";

export const ParticipantsPageMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 360px) {
    display: flex;
    justify-content: initial;
  }
`

export const ParticipantsPageMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TableMain = styled.div`

  table {
    border-spacing: 0;
    cursor: pointer;
    width: 1000px;
    align-items: center;
    min-height: 35vh;
    text-align: center;

    tr {
      :last-child {
        td {
          border-bottom: white;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid dimgray;
      /*border-right: 1px solid black;*/

      :last-child {
        border-right: 0;
      }
    }
  }
`;


export const TopOfPageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  
  @media screen and (max-width: 360px) {
    display: flex;
    justify-content: initial;
    gap: 5px;
  }
`
