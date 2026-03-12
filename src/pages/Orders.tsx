import { useTranslation } from 'react-i18next'

const Orders = () => {
  const { t } = useTranslation()

  const orders = [
    { id: 'ORDER001', customer: '张三', product: '商品A', amount: '¥299', status: t('orders.completed'), date: '2024-03-10' },
    { id: 'ORDER002', customer: '李四', product: '商品B', amount: '¥199', status: t('orders.pending'), date: '2024-03-09' },
    { id: 'ORDER003', customer: '王五', product: '商品C', amount: '¥399', status: t('orders.completed'), date: '2024-03-08' },
    { id: 'ORDER004', customer: '赵六', product: '商品D', amount: '¥499', status: t('orders.cancelled'), date: '2024-03-07' },
    { id: 'ORDER005', customer: '孙七', product: '商品E', amount: '¥159', status: t('orders.pending'), date: '2024-03-06' },
  ]

  const getStatusColor = (status: string) => {
    if (status === t('orders.completed')) return '#52c41a'
    if (status === t('orders.pending')) return '#faad14'
    if (status === t('orders.cancelled')) return '#ff4d4f'
    return '#666'
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>{t('orders.title')}</h2>
        <div>
          <input 
            type="text" 
            placeholder={t('orders.searchPlaceholder')}
            style={{ 
              padding: '8px 12px', 
              marginRight: '10px',
              border: '1px solid #d9d9d9',
              borderRadius: '4px',
              width: '200px'
            }}
          />
          <button style={{ 
            padding: '8px 16px', 
            backgroundColor: '#1890ff', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}>
            {t('orders.search')}
          </button>
        </div>
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
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('orders.orderId')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('orders.customer')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('orders.product')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('orders.amount')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('orders.status')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('orders.date')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('orders.action')}</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>{order.id}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>{order.customer}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>{order.product}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>{order.amount}</td>
                <td style={{ 
                  padding: '12px', 
                  borderBottom: '1px solid #e8e8e8',
                  color: getStatusColor(order.status)
                }}>
                {order.status}
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>{order.date}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>
                  <button style={{ 
                    padding: '5px 10px',
                    backgroundColor: '#1890ff', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer' 
                  }}>
                    {t('orders.view')}
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

export default Orders
