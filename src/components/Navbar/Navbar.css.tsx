import styled from "styled-components";

export const NavbarMain = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  
  @media (max-width: 360px) {
    display: flex;
    gap: 5px;
  }
  
  navbarItem {
    text-decoration: none;
  }
`;

export const NavItem = styled.div`
  cursor: pointer;
  text-decoration: none;
`;
