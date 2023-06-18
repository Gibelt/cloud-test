import { AppRoutes } from './routes'
import s from './App.module.css'

function App() {
  return (
    <div className={s.app}>
      <div className={s.wrapper}>
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
