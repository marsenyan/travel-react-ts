import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { MdOutlineTravelExplore } from 'react-icons/md';
import {  NavBarSection, Header, LogoDiv, Logo, NavBar,  NavLists, NavItem,
  NavLink, Button, CloseNavbar, ToggleNavbar } from './styles';

export const Navbar: React.FC = () => {
  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const removeNav = () => {
    setActive('navBar');
  };

  return (
    <>
      <NavBarSection>
        <Header className="header flex">
          <LogoDiv>
            <Logo className="logo flex">
              <h1>
                <MdOutlineTravelExplore/> Travel.
              </h1>
            </Logo>
          </LogoDiv>

          <NavBar className={active}>
            <NavLists onClick={removeNav} className="navLists flex">
              <NavItem className="navItem">
                <NavLink  className="navLink">
                  Home
                </NavLink>
                <NavLink className="navLink">
                  Packages
                </NavLink>
                <NavLink  className="navLink">
                  Shop
                </NavLink>
                <NavLink  className="navLink">
                  Pages
                </NavLink>
                <NavLink className="navLink">
                  About
                </NavLink>
                <NavLink className="navLink">
                  Contact
                </NavLink>
              </NavItem>
              
              <Button className="btn">
                <NavLink>BOOK NOW</NavLink>
              </Button>
            </NavLists>
            <CloseNavbar onClick={removeNav} className="closeNavbar">
              <AiFillCloseCircle/>
            </CloseNavbar>
          </NavBar>

          <ToggleNavbar onClick={showNav} className="toggleNavbar">
            <TbGridDots />
          </ToggleNavbar>
        </Header>
      </NavBarSection>
    </>
  );
};
