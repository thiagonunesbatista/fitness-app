import styled from 'styled-components'
import { ReactComponent as Keettle } from '../../assets/svg/kettlebell.svg'

const exercisesInstructions = [
  {
    name: 'Agachamento sumô',
    description: `Afaste seus pés. A distância correta é ligeiramente maior do que a largura dos ombros.
  A ponta dos pés fica voltada para fora, em um ângulo de 45º.
  É hora de agachar! Inspire enquanto dobra os joelhos e afunde os quadris até que as coxas fiquem paralelas ao chão.
  Mantenha as costas bem retinhas e alinhadas. Certifique-se de empurrar os calcanhares em direção ao chão.
  Volte à posição inicial.`
  },
  {
    name: 'Afundo cruzado',
    description: `Fique em pé com os pés afastados na largura dos quadris. 
    Mantendo o peso na perna esquerda, recue o pé direito na diagonal para trás e agache, mantenha essa posição. Depois volte ao início e repita o processo com a outra perna.`
  },
  {
    name: 'Flexão plantar',
    description: `Primeiro, coloque o step de frente para alguma barra de apoio onde você poderá segurar.
    Fique de pé em cima do step, mantendo a postura com a coluna reta.
    Coloque metade dos pés no step (a parte do peito do pé e dedos) e a outra metade para fora.
    Incline devagar o tornozelo para trás deixando o pé em diagonal e volte de forma mais acelerada ficando apenas com o peito do pé no step e o calcanhar levemente levantado. Repita.`
  }
]

export const Exercises = () => (
  <ExercisesContainer>
    <Keettle />

    <ExercisesList>
      {exercisesInstructions.map((currentInstruction, index) => (
        <ExerciseItem key={index}>
          <p>{currentInstruction.name}</p>
          <p>{currentInstruction.description}</p>
        </ExerciseItem>
      ))}
    </ExercisesList>
  </ExercisesContainer>
)

const ExercisesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  gap: 40px;
  margin: 0 auto;
`

const ExercisesList = styled.ul`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 10px;
  border: 1px solid;

  ${({ theme: { colors } }) => ({
    borderColor: colors.primary
  })}
`

const ExerciseItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p:first-of-type {
    padding: 8px 16px;
    border-radius: 10px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;

    ${({ theme: { colors } }) => ({
      backgroundColor: colors.primary
    })}
  }

  p:not(:first-of-type) {
    padding: 0 16px;
  }
`
