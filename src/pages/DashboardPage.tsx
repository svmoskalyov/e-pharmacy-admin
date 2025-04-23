import { useEffect } from 'react'
import { Box, Skeleton } from '@mui/material'
import { useDataStore } from '../stores/dataStore.ts'
import Statistics from '../components/Statistics.tsx'
import RecentCustomers from '../components/RecentCustomers.tsx'
import IncomeExpenses from '../components/IncomeExpenses.tsx'
import Alerti from '../components/ui/Alerti.tsx'

function DashboardPage() {
  const getData = useDataStore((state) => state.getData)
  const products = useDataStore((state) => state.products)
  const suppliers = useDataStore((state) => state.suppliers)
  const customers = useDataStore((state) => state.customers)
  const incomeExpenses = useDataStore((state) => state.incomeExpenses)
  const isLoading = useDataStore((state) => state.isLoading)
  const error = useDataStore((state) => state.error)

  useEffect(() => {
      if (!products.length) getData('products')
      if (!suppliers.length) getData('suppliers')
      if (!customers.length) getData('customers')
      if (!incomeExpenses.length) getData('incomeExpenses')
    }, [
      getData,
      customers.length,
      incomeExpenses.length,
      products.length,
      suppliers.length
    ]
  )

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {isLoading && !error ?
          <>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                marginBottom: { mobile: '20px', tablet: '40px' },
                width: '100%',
                maxWidth: { mobile: '335px', tablet: '704px', desktop: '1280px' }
              }}
            >
              <Skeleton
                variant="rounded"
                sx={{
                  width: { mobile: '157px', tablet: '221px', desktop: '240px' },
                  height: { mobile: '98px', tablet: '108px', desktop: '108px' }
                }}
              />
              <Skeleton
                variant="rounded"
                sx={{
                  width: { mobile: '157px', tablet: '221px', desktop: '240px' },
                  height: { mobile: '98px', tablet: '108px', desktop: '108px' }
                }}
              />
              <Skeleton
                variant="rounded"
                sx={{
                  width: { mobile: '157px', tablet: '221px', desktop: '240px' },
                  height: { mobile: '98px', tablet: '108px', desktop: '108px' }
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: { mobile: 'column', desktop: 'row' },
                gap: { mobile: '40px', tablet: '20px' },
                marginBottom: { mobile: '40px', tablet: '20px', desktop: '0px' },
                width: '100%'
              }}
            >
              <Skeleton
                variant="rounded"
                sx={{
                  width: '100%',
                  maxWidth: { mobile: '335px', tablet: '704px', desktop: '630px' },
                  height: { mobile: '460px', tablet: '512px' }
                }}
              />
              <Skeleton
                variant="rounded"
                sx={{
                  width: '100%',
                  maxWidth: { mobile: '335px', tablet: '704px', desktop: '630px' },
                  height: { mobile: '511px', tablet: '512px' }
                }}
              />
            </Box>
          </>
          : (
            <>
              <Statistics />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: { mobile: 'column', desktop: 'row' },
                  gap: { mobile: '40px', tablet: '20px' },
                  marginBottom: { mobile: '40px', tablet: '20px', desktop: '0px' },
                  width: '100%'
                }}
              >
                <RecentCustomers customers={customers} />
                <IncomeExpenses incomeExpenses={incomeExpenses} />
              </Box>
            </>
          )
        }
      </Box>

      {error && <Alerti severity="error" message={error} />}
    </>
  )
}

export default DashboardPage
