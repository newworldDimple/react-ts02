import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { logout } from '../store/authSlice'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

const Header = () => {
  const { user } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const { t, i18n: i18nInstance } = useTranslation()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div style={{ 
      height: '60px', 
      backgroundColor: '#fff', 
      borderBottom: '1px solid #e8e8e8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      position: 'fixed',
      top: 0,
      left: '250px',
      right: 0,
      zIndex: 1000
    }}>
      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#001529' }}>
        {t('title')}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button
          onClick={() => i18n.changeLanguage('en')}
          style={{
            padding: '5px 10px',
            cursor: 'pointer',
            backgroundColor: i18nInstance.language === 'en' ? '#1890ff' : '#f0f0f0',
            color: i18nInstance.language === 'en' ? '#fff' : '#333',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          EN
        </button>
        <button
          onClick={() => i18n.changeLanguage('zh')}
          style={{
            padding: '5px 10px',
            cursor: 'pointer',
            backgroundColor: i18nInstance.language === 'zh' ? '#1890ff' : '#f0f0f0',
            color: i18nInstance.language === 'zh' ? '#fff' : '#333',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          中文
        </button>
        <span style={{ color: '#333' }}>{user?.username}</span>
        <button
          onClick={handleLogout}
          style={{
            padding: '5px 15px',
            cursor: 'pointer',
            backgroundColor: '#ff4d4f',
            color: '#fff',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          {t('home.logout')}
        </button>
      </div>
    </div>
  )
}

export default Header
