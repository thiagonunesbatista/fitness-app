import { useState } from 'react'
import { HiMenu, HiOutlineUser, HiX } from 'react-icons/hi'
import styled from 'styled-components'

import { ContentContainer } from '../ContentContainer'
import { Sidebar } from '../Sidebar'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(currentState => !currentState)

  return (
    <StyledNavbar>
      <NavbarContentContainer>
        <button title={isSideBarOpen ? 'fechar menu' : 'abrir menu'}>
          {isSideBarOpen ? (
            <HiX size={30} onClick={toggleSidebar} />
          ) : (
            <HiMenu size={30} onClick={toggleSidebar} />
          )}
        </button>

        <NavbarTitle to='/'>Only Fitness</NavbarTitle>
        <HiOutlineUser size={30} />
      </NavbarContentContainer>

      <Sidebar isOpen={isSideBarOpen} toggleSidebar={toggleSidebar} />

      {isSideBarOpen && <SidebarOverlay onClick={toggleSidebar} />}
    </StyledNavbar>
  )
}

const NavbarContentContainer = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  padding: 0 20px;
`

const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  background: #fff;

  p {
    text-transform: uppercase;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    height: 30px;
  }

  svg path {
    color: #111;
  }
`

const NavbarTitle = styled(Link)`
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-transform: uppercase;
  opacity: 0.7;
`

const SidebarOverlay = styled.div`
  position: absolute;
  background-color: rgba(1, 7, 31, 0.6);
  width: 100%;
  height: calc(100vh - 80px);
  left: 0;
`
