import { useTranslation } from 'react-i18next'

const Dashboard = () => {
  const { t } = useTranslation()

  const stats = [
    { title: t('dashboard.totalSales'), value: '¥1,234,567', color: '#1890ff' },
    { title: t('dashboard.totalOrders'), value: '1,234', color: '#52c41a' },
    { title: t('dashboard.totalUsers'), value: '5,678', color: '#faad14' },
    { title: t('dashboard.totalProducts'), value: '890', color: '#f5222d' },
  ]

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>{t('dashboard.title')}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' }}>
        {stats.map((stat, index) => (
          <div key={index} style={{ 
            padding: '20px', 
            backgroundColor: '#fff', 
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{ color: '#666', marginBottom: '10px' }}>{stat.title}</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: stat.color }}>{stat.value}</div>
          </div>
        ))}
      </div>
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#fff', 
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ marginBottom: '15px' }}>{t('dashboard.recentOrders')}</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('dashboard.orderId')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('dashboard.product')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('dashboard.amount')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('dashboard.status')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>ORDER001</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>商品A</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>¥299</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8', color: '#52c41a' }}>{t('dashboard.completed')}</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>ORDER002</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>商品B</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>¥199</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8', color: '#faad14' }}>{t('dashboard.pending')}</td>
            </tr>
            <tr>
              <td style={{ padding: '12px' }}>ORDER003</td>
              <td style={{ padding: '12px' }}>商品C</td>
              <td style={{ padding: '12px' }}>¥399</td>
              <td style={{ padding: '12px', color: '#52c41a' }}>{t('dashboard.completed')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
