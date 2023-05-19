import styled from "styled-components";


export const TableMain = styled.div`

  table {
    border-spacing: 0;
    cursor: pointer;
    width: 1000px;
    align-items: center;
    min-height: 35vh;
    color: ${(props) => props.color};
    text-align: center;

    tr {
      min-height: 75px;
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
    
    @media screen and (max-width: 360px) {
      
    }
    
  }
`;

