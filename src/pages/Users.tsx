import { useTranslation } from 'react-i18next'

const Users = () => {
  const { t } = useTranslation()

  const users = [
    { id: 'U001', name: '张三', email: 'zhangsan@example.com', role: t('users.admin'), status: t('users.active') },
    { id: 'U002', name: '李四', email: 'lisi@example.com', role: t('users.user'), status: t('users.active') },
    { id: 'U003', name: '王五', email: 'wangwu@example.com', role: t('users.user'), status: t('users.inactive') },
    { id: 'U004', name: '赵六', email: 'zhaoliu@example.com', role: t('users.admin'), status: t('users.active') },
    { id: 'U005', name: '孙七', email: 'sunqi@example.com', role: t('users.user'), status: t('users.active') },
  ]

  const getStatusColor = (status: string) => {
    if (status === t('users.active')) return '#52c41a'
    if (status === t('users.inactive')) return '#ff4d4f'
    return '#666'
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>{t('users.title')}</h2>
        <button style={{ 
          padding: '8px 16px', 
          backgroundColor: '#1890ff', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer' 
        }}>
          {t('users.addUserUser')}
        </button>
      </div>
      <div style={{ 
        backgroundColor: '#fff', 
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('users.id')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('users.name')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('users.email')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('users.role')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('users.status')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('users.action')}</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>{user.id}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>{user.name}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>{user.email}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>{user.role}</td>
                <td style={{ 
                  padding: '12px', 
                  borderBottom: '1px solid #e8e8e8',
                  color: getStatusColor(user.status)
                }}>
                  {user.status}
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>
                  <button style={{ 
                    padding: '5px 10px', 
                    marginRight: '5px',
                    backgroundColor: '#1890ff', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer' 
                  }}>
                    {t('users.edit')}
                  </button>
                  <button style={{ 
                    padding: '5px 10px', 
                    backgroundColor: '#ff4d4f', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer' 
                  }}>
                    {t('users.delete')}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
