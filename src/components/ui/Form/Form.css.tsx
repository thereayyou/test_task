import styled from "styled-components";
import DatePicker from "react-datepicker";

interface FormProps {
    opacityValue?: 0 | 1,
    pointerEvents?: 'none' | 'all'
}

export const FormMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  color: white;
  padding-top: 10px;
  :last-child {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  input {
    border-radius: 30px;
    height: 30px;
    width: 600px;
    margin-bottom: 15px;
    background-color: #d1d1d1;
    padding-left: 15px;
  }
`

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: initial;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const FormError = styled.div`
  display: flex;
  justify-content: flex-start;
  color: red;
`

export const ErrorContainer = styled.div`
    
`

export const Modal = styled.div<FormProps>`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({opacityValue}) => opacityValue ? 0 : 1};
  transition: 0.5s;
`;

export const ModalContent = styled.div`
  padding: 30px 45px 45px 45px;
  border-right: 12px;
  width: 50%;
  background: #363636;
`;

export const HasPaymentMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonsUnderForm = styled.div`
  display: flex;
  justify-content: flex-end;
gap: 25px;
`

export const StyledDatePickerWrapper = styled.div`
  
.react-datepicker {
    font-family: Arial, sans-serif;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    display: inline-block;
  }

  .react-datepicker__header {
    background-color: #f0f0f0;
    border-bottom: none;
    padding: 5px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .react-datepicker__month-container {
    flex-wrap: wrap;
    justify-content: center;
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 2rem;
    line-height: 2rem;
    margin: 0.1rem;
    text-align: center;
  }

  .react-datepicker__day--selected {
    background-color: #007bff;
    color: #fff;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #007bff !important;
    color: #fff;
  }

  .react-datepicker__triangle::after {
    left: -20px !important;
  }

  .react-datepicker__triangle::before {
    left: -20px !important;
  }
  
  .react-datepicker__triangle {
    left: -20px !important;
  }
  
`;

export const StyledDatePicker = styled(DatePicker)`
  padding: 5px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
`;
