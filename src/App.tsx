import { useSelector } from 'react-redux'
import { RootState } from './store'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'

function App() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  return isAuthenticated ? <HomePage /> : <LoginPage />
}

export default App
