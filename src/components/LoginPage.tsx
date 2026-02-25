import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import { validateLogin } from '../mock/users'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { t, i18n: i18nInstance } = useTranslation()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username && password && validateLogin(username, password)) {
      dispatch(login({ username }))
    } else {
      alert(t('login.error'))
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <button
          onClick={() => i18n.changeLanguage('en')}
          style={{ 
            padding: '8px 16px', 
            cursor: 'pointer', 
            marginRight: '10px',
            backgroundColor: i18nInstance.language === 'en' ? '#007bff' : '#f0f0f0',
            color: i18nInstance.language === 'en' ? '#fff' : '#333'
          }}
        >
          English
        </button>
        <button
          onClick={() => i18n.changeLanguage('zh')}
          style={{ 
            padding: '8px 16px', 
            cursor: 'pointer',
            backgroundColor: i18nInstance.language === 'zh' ? '#007bff' : '#f0f0f0',
            color: i18nInstance.language === 'zh' ? '#fff' : '#333'
          }}
        >
          中文
        </button>
      </div>
      <h2>{t('login.title')}</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>{t('login.username')}:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>{t('login.password')}:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', cursor: 'pointer' }}>
          {t('login.button')}
        </button>
      </form>
    </div>
  )
}

export default LoginPage
