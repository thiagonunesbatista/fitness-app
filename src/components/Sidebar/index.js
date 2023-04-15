import { Link } from 'react-router-dom'
import styled from 'styled-components'

const sideBarItems = [
  {
    name: 'Exercícios',
    link: '/exercises'
  },
  {
    name: 'Dieta',
    link: '/diets'
  }
]

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      {sideBarItems.map((currentItem, index) => (
        <SidebarLink to={currentItem.link} onClick={toggleSidebar} key={index}>
          {currentItem.name}
        </SidebarLink>
      ))}
    </SidebarContainer>
  )
}

const SidebarContainer = styled.nav`
  position: absolute;
  top: 80px;
  background-color: #fff;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  gap: 20px;
  left: -100%;
  z-index: 1;
  max-width: 500px;

  ${({ isOpen }) =>
    isOpen && {
      left: 0
    }}

  a {
    font-size: 50px;
    padding-bottom: 32px;
    border-bottom: solid 2px #111;
    max-width: 500px;
  }
`

const SidebarLink = styled(Link)`
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.7;
  }
`
