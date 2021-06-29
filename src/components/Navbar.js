import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Hamburger from "hamburger-react";
import useToggle from "../hooks/useToggle";
import { SCREENS } from "../styles/responsive";
import logo from "../images/pokeball.svg";

function Navbar() {
  const [isOpen, toggle] = useToggle(false);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.md });

  return (
    <NavbarContainer>
      <NavbarLogo to="/">
        <img src={logo} alt="logo" />
        <h1>Pokesearch</h1>
      </NavbarLogo>

      {isMobile ? (
        <div>
          <Hamburger rounded color="#fff" toggled={isOpen} toggle={toggle} />
          <SidebarContainer isOpen={isOpen}>
            <SidebarMenu>
              <SidebarLink to="/">Pokemons</SidebarLink>
              <SidebarLink to="/">Compare</SidebarLink>
              <SidebarLink to="/">Create</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
              <ButtonLink to="/login">Regístrate ahora</ButtonLink>
            </SideBtnWrap>
          </SidebarContainer>
        </div>
      ) : (
        <ListNavItems>
          <NavItem to="/">Pokemons</NavItem>
          <NavItem to="/">Compare</NavItem>
          <NavItem to="/">Create</NavItem>
          <NavItem to="/">Contact</NavItem>
        </ListNavItems>
      )}
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.nav`
  height: 80px;
  margin: 0 auto;
  max-width: 1200px;
  color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`;
const NavbarLogo = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  img {
    height: 60px;
    margin: 0 1rem;
  }
  h1 {
    font-size: 2.2rem;
    color: var(--white);
  }
`;
const ListNavItems = styled.div`
  gap: 1.5rem;
  margin: 0 1rem;
  display: flex;
  list-style: none;
  align-items: center;
`;
const NavItem = styled(Link)`
  font-size: 1.2rem;
  color: var(--white);
  text-decoration: none;

  :hover {
    color: var(--red_ligth);
    transition: all 0.2s ease-in-out;
  }
`;
const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 10;
  top: 80px;
  width: 350px;
  height: calc(100% - 80px);
  background: var(--gray);
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;
const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: var(--white);
  cursor: pointer;

  &:hover {
    color: var(--red);
    transition: 0.2s ease-in-out;
  }
`;
const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
  border: solid 1px var(--white);
  border-radius: 5px;
  padding: 1rem 4rem;
`;
