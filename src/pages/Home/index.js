import styled from 'styled-components'

import { ContentContainer } from '../../components/ContentContainer'
import { Category } from '../../components/Category'

const categories = [
  {
    name: 'Iniciante',
    description: 'começando agora na academia'
  },
  {
    name: 'Intermediário',
    description: 'conheço vários exercícios'
  },
  {
    name: 'Avançado',
    description: 'querendo aprender novas variações'
  }
]

export const Home = () => {
  return (
    <ContentContainer>
      <CategoriesContainer>
        {categories.map((currentCategory, index) => (
          <Category category={currentCategory} key={index} />
        ))}
      </CategoriesContainer>
    </ContentContainer>
  )
}

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
`
