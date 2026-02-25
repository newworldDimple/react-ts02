import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { logout } from '../store/authSlice'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { user } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const handleLogout = () => {
    dispatch(logout())
    console.log('logout',logout())
  }

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', textAlign: 'center' }}>
      <h1>{t('home.welcome')}, {user?.username}!</h1>
      <p>{t('home.loggedIn')}</p>
      <button 
        onClick={handleLogout}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        {t('home.logout')}
      </button>
    </div>
  )
}

export default HomePage
