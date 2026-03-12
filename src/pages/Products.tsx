import { useTranslation } from 'react-i18next'

const Products = () => {
  const { t } = useTranslation()

  const products = [
    { id: 'P001', name: '商品A', price: '¥299', stock: 100, status: t('products.inStock') },
    { id: 'P002', name: '商品B', price: '¥199', stock: 50, status: t('products.inStock') },
    { id: 'P003', name: '商品C', price: '¥399', stock: 0, status: t('products.outOfStock') },
    { id: 'P004', name: '商品D', price: '¥499', stock: 200, status: t('products.inStock') },
    { id: 'P005', name: '商品E', price: '¥159', stock: 75, status: t('products.inStock') },
  ]

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>{t('products.title')}</h2>
        <button style={{ 
          padding: '8px 16px', 
          backgroundColor: '#1890ff', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer' 
        }}>
          {t('products.addProduct')}
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
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('products.id')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('products.name')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('products.price')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('products.stock')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('products.status')}</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>{t('products.action')}</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>{product.id}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>{product.name}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>{product.price}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e8e8e8' }}>{product.stock}</td>
                <td style={{ 
                  padding: '12px', 
                  borderBottom: '1px solid #e8e8e8',
                  color: product.stock > 0 ? '#52c41a' : '#ff4d4f'
                }}>
                  {product.status}
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
                    {t('products.edit')}
                  </button>
                  <button style={{ 
                    padding: '5px 10px', 
                    backgroundColor: '#ff4d4f', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer' 
                  }}>
                    {t('products.delete')}
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

export default Products
