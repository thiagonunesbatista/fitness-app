import styled from 'styled-components'
import { ReactComponent as Keettle } from '../../assets/svg/kettlebell.svg'

export const Exercises = () => (
  <StyledExercises>
    <Keettle />
  </StyledExercises>
)

const StyledExercises = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 576px;
  margin: auto;

  svg {
    width: 5000px;
  }
`
