import styled from 'styled-components'

import { Input } from '../../components/Forms'

export const Login = () => (
  <StyledLogin>
    <Input placeholder='login' />
    <Input placeholder='senha' />
  </StyledLogin>
)

const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 380px;
  margin: auto;
`
