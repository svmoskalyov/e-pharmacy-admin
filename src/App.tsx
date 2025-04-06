import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { useAuthStore } from './stores/authStore.ts'
import LoginPage from './pages/LoginPage.tsx'

const SharedLayout = lazy(() => import('./layouts/SharedLayout.tsx'))
const DashboardPage = lazy(() => import('./pages/DashboardPage.tsx'))
const AllOrdersPage = lazy(() => import('./pages/AllOrdersPage.tsx'))
const AllProductsPage = lazy(() => import('./pages/AllProductsPage.tsx'))
const AllCustomersPage = lazy(() => import('./pages/AllCustomersPage.tsx'))
const AllSuppliersPage = lazy(() => import('./pages/AllSuppliersPage.tsx'))

function App() {
  const isAuth = useAuthStore((state) => state.isAuth)

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
            <Route path="customers" element={<AllCustomersPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        )}
      </Routes>
    </>
  )
}

export default App