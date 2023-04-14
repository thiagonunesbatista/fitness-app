import styled from 'styled-components'

export const ContentContainer = ({ children }) => (
  <StyledContentContainer>{children}</StyledContentContainer>
)

export const StyledContentContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
`
