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

  console.log('customers --', customers)
  console.log('incomeExpenses --', incomeExpenses)

  useEffect(() => {
    if (!customers.length) getData('customers')
    if (!incomeExpenses.length) getData('incomeExpenses')
  }, [customers.length, incomeExpenses.length, getData])

  return (
    <Box>
      <Statistics />
      <RecentCustomers customers={customers} />
      <IncomeExpenses incomeExpenses={incomeExpenses}/>
    </Box>
  )
}

export default DashboardPage