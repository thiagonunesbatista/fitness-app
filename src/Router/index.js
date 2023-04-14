import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home, Login } from '../pages'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
