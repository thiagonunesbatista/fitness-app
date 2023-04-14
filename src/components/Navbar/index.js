import { HiMenu, HiOutlineUser } from 'react-icons/hi'
import styled from 'styled-components'

import { ContentContainer } from '../ContentContainer'

export const Navbar = () => {
  return (
    <StyledNavbar>
      <ContentContainer>
        <HiMenu size={30} />
        <NavbarTitle>Only Fitness</NavbarTitle>
        <HiOutlineUser size={30} />
      </ContentContainer>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  p {
    text-transform: uppercase;
  }
`

export const NavbarTitle = styled.p`
  font-weight: 700;
`

// #f5b82e
// #111
// #fff
