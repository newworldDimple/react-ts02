import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { logout } from '../store/authSlice'

const HomePage = () => {
  //userState是redux里面的，获取到了RootState就可以每一个页面取到RootState的值
  const { user } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  //
// useDispatch是dispatch的hook 可以拿到store中的dispatch，
  const handleLogout = () => {
    dispatch(logout())
    console.log('logout',logout())
  }

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', textAlign: 'center' }}>
      <h1>Welcome, {user?.username}!</h1>
      <p>You are now logged in.</p>
      <button 
        onClick={handleLogout}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Logout
      </button>
    </div>
  )
}

export default HomePage
