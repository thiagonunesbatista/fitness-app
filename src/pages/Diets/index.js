import styled from 'styled-components'
import { ListItem, ListsContainer } from '../../components/Lists'

const dietInstructions = [
  {
    name: 'Café',
    meals: [
      {
        name: 'Pão integral',
        quantity: '25g / 1 fatia'
      },
      {
        name: 'Leite de vaca, semidesnatado',
        quantity: '250ml / 1 copo'
      },
      {
        name: 'Banana',
        quantity: '50g / 1 unidade'
      },
      {
        name: 'Ovo de galinha',
        quantity: '80g / 1 unidade'
      }
    ]
  },
  {
    name: 'Lanche da manhã',
    meals: [
      {
        name: 'Pão integral',
        quantity: '25g / 1 fatia'
      },
      {
        name: 'Leite de vaca, semidesnatado',
        quantity: '250ml / 1 copo'
      },
      {
        name: 'Banana',
        quantity: '50g / 1 unidade'
      },
      {
        name: 'Ovo de galinha',
        quantity: '80g / 1 unidade'
      }
    ]
  },
  {
    name: 'Almoço',
    meals: [
      {
        name: 'Arroz integral',
        quantity: '120g / 2 colheres de servir'
      },
      {
        name: 'Filé de peito de frango',
        quantity: '120g / 1 filé de feito'
      },
      {
        name: 'Feijão',
        quantity: '80g / 1 concha pequena'
      },
      {
        name: 'Vegetais',
        quantity: 'À vontade'
      }
    ]
  },
  {
    name: 'Jantar',
    meals: [
      {
        name: 'Arroz branco',
        quantity: '100g / 2 colheres de servir'
      },
      {
        name: 'Filé de peito de frango',
        quantity: '120g / 1 filé de feito'
      }
    ]
  }
]

export const Diets = () => (
  <DietsContainer>
    <ListsContainer secondary>
      {dietInstructions.map((currentInstruction, index) => (
        <ListItem secondary key={index}>
          <p>{currentInstruction.name}</p>

          <MealList>
            {currentInstruction.meals.map((currentMeal, mealIndex) => (
              <MealItem key={mealIndex}>
                {currentMeal.name} - {currentMeal.quantity}
              </MealItem>
            ))}
          </MealList>
        </ListItem>
      ))}
    </ListsContainer>
  </DietsContainer>
)

const DietsContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

const MealList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 16px;
`

const MealItem = styled.li`
  font-size: 20px;
  line-height: 24px;
  list-style-type: disc;
`
