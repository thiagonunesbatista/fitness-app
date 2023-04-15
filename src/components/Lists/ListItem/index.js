import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p:first-of-type {
    padding: 8px 16px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 20px;

    ${({ secondary, theme: { colors } }) =>
      secondary
        ? {
            backgroundColor: colors.white
          }
        : {
            backgroundColor: colors.primary
          }}
  }

  p:not(:first-of-type) {
    padding: 0 16px;
  }
`
