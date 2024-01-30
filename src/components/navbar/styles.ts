import styled from 'styled-components';

export const NavBarSection = styled.section`
  
`;
export const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--whiteColorDeam);
  width: 100%;
  height: var(--headerHeight);
  z-index: 1000;
  padding: 1rem;

  @media screen and (max-width: 958) {
    padding: 1.5rem 2rem;
  }
  
  @media screen and (min-width: 1024px) {
    padding: 1rem 8.5rem;
  }
  &.activeHeader {
    background: var(--projectCardColor);
    box-shadow: 0 2px 4px rgba(2, 15, 29, 0.904);
  }
`;

export const LogoDiv = styled.div`
  color: var(--blackColor);
  font-weight: 600;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 25px;
    color: var(--PrimaryColor);
    transform: translateY(5px);
  }
`;

export const NavBar = styled.div`
  @media screen and (max-width: 768px) {
    background: var(--whiteColorDeam);
    position: absolute;
    height: max-content;
    width: 80%;
    border-radius: 1rem;
    padding: 1rem;
    top: -700%;
    left: 50%;
    transform: translate(-50%);
    z-index: 2000;
    box-shadow: 0 2px 4px rgba(2, 15, 29, 0.904);
    transition: 0.3s ease-in-out;

    &.activeNavbar {
      top: 7rem;
    }
  }
`;
export const Logo = styled.div``;

export const NavLists = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin: auto;
  padding: 0.5rem 0;

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;
export const NavItem = styled.li`
  padding: 0.5rem 0;
  
  @media screen and (max-width: 960px) {
    padding: 0 0.7rem;
    display: flex;
    flex-direction: column; 
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;
export const NavLink = styled.a`
  color: var(--textColor);
  font-size: 0.9rem;
  font-weight: 600;

  &:hover {
    color: var(--PrimaryColor);
  }

  @media screen and (min-width: 769px) {
    padding: 0 0.45rem;
    font-size: 0.9rem;
    font-weight: 500;

    &:hover {
      color: var(--PrimaryColor);
    }
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  position: relative;
  bottom: 7px;
  @media screen and (min-width: 769px) {
    margin-left: 1rem;
  }

  a {
    font-weight: 600;
    color: var(--whiteColor);
  }
`;

export const IconContainer = styled.div`
  .icon {
    font-size: 25px;
    color: var(--PrimaryColor);
  }

  &:hover .icon {
    color: var(--SecondaryColor);
  }
`;
export const CloseNavbar = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  color: var(--PrimaryColor);

  &:hover {
    ${IconContainer} {
      color: var(--SecondaryColor);
    }
  }

  @media screen and (max-width: 766px) {
    ${IconContainer} {
      display: none;
    }
  }

  @media screen and (min-width: 960px) {
    display: none;
  }
`;


export const ToggleNavbar = styled.div`
  .icon {
    font-size: 25px;
    color: var(--PrimaryColor);
  }

  &:hover .icon {
    color: var(--SecondaryColor);
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
  
`;