import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Category = ({ category: { link, name, description } }) => (
  <StlyedCategory to={link}>
    <CategoryName>{name}</CategoryName>
    <CategoryDescription>{description}</CategoryDescription>
  </StlyedCategory>
)

const StlyedCategory = styled(Link)`
  background: #fff;
  border-radius: 10px;
  padding: 24px 20px;
  color: #111;
  cursor: pointer;
  transition: all 0.3s linear;
  border: 4px solid #fff;
  height: fit-content;
  width: 100%;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.75);
  }
`

const CategoryName = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`

const CategoryDescription = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
`
