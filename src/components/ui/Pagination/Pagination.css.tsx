import styled from "styled-components";

export const PaginationMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding-top: 25px;
`

export const ButtonsList = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  gap: 5px;
  color: ${(props) => props.color}
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 35px;
  color: white;
  background-color: ${(props) => props.color};
`