import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Category = ({ category: { link, name, description } }) => (
  <StlyedCategory to={link}>
    <CategoryName>{name}</CategoryName>
    <CategoryDescription>{description}</CategoryDescription>
  </StlyedCategory>
)

const StlyedCategory = styled(Link)`
  border-radius: 10px;
  padding: 24px 20px;
  cursor: pointer;
  transition: all 0.3s linear;
  border: 4px solid;
  height: fit-content;
  width: 100%;

  ${({ theme: { colors } }) => ({
    background: colors.primary,
    borderColor: colors.primary
  })}

  &:hover {
    ${({ theme: { overlays } }) => ({
      background: overlays.primary
    })}
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
