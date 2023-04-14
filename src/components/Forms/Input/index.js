import styled from 'styled-components'

export const Input = ({ props }) => <StyledInput {...props} />

const StyledInput = styled.input`
  border-radius: 10px;
  border: none;
  height: 50px;
  display: flex;
  align-items: center;
`
