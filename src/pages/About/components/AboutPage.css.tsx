import styled from "styled-components";

export const AboutMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const AboutHeader = styled.h1`
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.color};
  
  @media (max-width: 360px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
  }

  @media(max-width: 769px) {
    display: flex;
    justify-content: center;
  }
  }
`;

export const AboutDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 50%;
  
  @media (min-width: 360px) {
    display: flex;
    max-width: 100%;
  }

  @media (min-width: 480px) {
    max-width: 100%;
  }
  
`;

export const DescriptionItem = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: start;
`;

export const AboutPageBody = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.color};
  gap: 25px;
  
  @media (min-width: 360px) {
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-size: 10px;
    margin-bottom: 25px;
}
  
  @media (min-width: 480px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

export const AboutPageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-direction: row;

  @media(max-width: 700px) {
    img {
      display: none;
    }
  }
  
  @media (max-width: 360px) {
    display: none;
  }
`;
