import styled from 'styled-components'

import { Category } from './_components'

const categories = [
  {
    name: 'Iniciante',
    description: 'começando agora na academia',
    link: '/exercises'
  },
  {
    name: 'Intermediário',
    description: 'conheço vários exercícios',
    link: '/exercises'
  },
  {
    name: 'Avançado',
    description: 'querendo aprender novas variações',
    link: '/exercises'
  }
]

export const Home = () => {
  return (
    <CategoriesContainer>
      {categories.map((currentCategory, index) => (
        <Category category={currentCategory} key={index} />
      ))}
    </CategoriesContainer>
  )
}

const CategoriesContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  padding: 0 20px;
  min-height: calc(100vh - 70px);
`
