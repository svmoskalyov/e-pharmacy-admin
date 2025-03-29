import { Navigate, Route, Routes } from 'react-router'
import LoginPage from './pages/LoginPage.tsx'
import SharedLayout from './layouts/SharedLayout.tsx'
import DashboardPage from './pages/DashboardPage.tsx'
import AllOrdersPage from './pages/AllOrdersPage.tsx'
import AllProductsPage from './pages/AllProductsPage.tsx'
import CustomersDataPage from './pages/CustomersDataPage.tsx'
import AllSuppliersPage from './pages/AllSuppliersPage.tsx'

function App() {
  const isAuth = false
  // const isAuth = true

  return (
    <>
      <Routes>
        {!isAuth ? (
          <Route path="/" element={<LoginPage />}>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        ) : (
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="orders" element={<AllOrdersPage />} />
            <Route path="products" element={<AllProductsPage />} />
            <Route path="suppliers" element={<AllSuppliersPage />} />
            <Route path="customers" element={<CustomersDataPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        )}
      </Routes>
    </>
  )
}

export default App
