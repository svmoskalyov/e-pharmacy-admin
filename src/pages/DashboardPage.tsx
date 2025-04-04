import { useEffect } from 'react'
import { Box } from '@mui/material'
import { useDataStore } from '../stores/dataStore.ts'
import Statistics from '../components/Statistics.tsx'
import RecentCustomers from '../components/RecentCustomers.tsx'
import IncomeExpenses from '../components/IncomeExpenses.tsx'

function DashboardPage() {
  const getData = useDataStore((state) => state.getData)
  const customers = useDataStore((state) => state.customers)
  const incomeExpenses = useDataStore((state) => state.incomeExpenses)

  useEffect(() => {
    if (!customers.length) getData('customers')
    if (!incomeExpenses.length) getData('incomeExpenses')
  }, [customers.length, incomeExpenses.length, getData])

  return (
    <Box>
      <Statistics />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { mobile: 'column', desktop: 'row' },
          gap: { mobile: '40px', tablet: '20px' },
          marginBottom: { mobile: '40px', tablet: '20px', desktop: '0px' }
        }}
      >
        <RecentCustomers customers={customers} />
        <IncomeExpenses incomeExpenses={incomeExpenses} />
      </Box>
    </Box>
  )
}

export default DashboardPage