import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Sidebar = () => {
  const location = useLocation()
  const { t } = useTranslation()
  
  const menuItems = [
    { path: '/admin/dashboard', label: t('menu.dashboard') },
    { path: '/admin/products', label: t('menu.products') },
    { path: '/admin/orders', label: t('menu.orders') },
    { path: '/admin/users', label: t('menu.users') },
  ]

  return (
    <div style={{ 
      width: '250px', 
      height: '100vh', 
      backgroundColor: '#001529', 
      color: '#fff',
      position: 'fixed',
      left: 0,
      top: 0,
      paddingTop: '60px'
    }}>
      <div style={{ padding: '20px' }}>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              display: 'block',
              padding: '12px 20px',
              color: location.pathname === item.path ? '#1890ff' : '#fff',
              textDecoration: 'none',
              backgroundColor: location.pathname === item.path ? 'rgba(255,255,255,0.1)' : 'transparent',
              borderRadius: '4px',
              marginBottom: '8px'
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
