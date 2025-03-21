import { Outlet } from 'react-router'
import Header from '../components/Header.tsx'
import Sidebar from '../components/Sidebar.tsx'

function SharedLayout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Sidebar />
    </div>
  )
}

export default SharedLayout