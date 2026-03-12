import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { RootState } from './store'
import LoginPage from './components/LoginPage'
import Sidebar from './layouts/Sidebar'
import Header from './layouts/Header'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Users from './pages/Users'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <Header />
      <div style={{ marginLeft: '250px', marginTop: '60px', padding: '20px' }}>
        {children}
      </div>
    </>
  )
}

function App() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/admin/*" 
          element={
            isAuthenticated ? (
              <AdminLayout>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="products" element={<Products />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="users" element={<Users />} />
                  <Route path="" element={<Navigate to="/admin/dashboard" replace />} />
                </Routes>
              </AdminLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
