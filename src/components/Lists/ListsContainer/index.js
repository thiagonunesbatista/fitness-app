import styled from 'styled-components'

export const ListsContainer = styled.ul`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 10px;
  border: 1px solid;

  ${({ secondary, theme: { colors } }) =>
    secondary
      ? {
          borderColor: colors.primary,
          background: colors.primary
        }
      : {
          borderColor: colors.primary,
          background: colors.white
        }}
`
