import { Routes, Route } from 'react-router-dom'
import Register from './pages/register/Register'
import UserForm from './pages/userForm/UserForm'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/form" element={<UserForm />} />
    </Routes>
  )
}
