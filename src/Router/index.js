import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Diets, Exercises, Home, Login } from '../pages'
import { Navbar } from '../components/Navbar'
import { ContentContainer } from '../components/ContentContainer'

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <ContentContainer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/diets' element={<Diets />} />
          <Route path='/exercises' element={<Exercises />} />
        </Routes>
      </ContentContainer>
    </BrowserRouter>
  )
}
