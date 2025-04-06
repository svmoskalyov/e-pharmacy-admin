import { Box } from '@mui/material'
import { useDataStore } from '../stores/dataStore.ts'
import StatisticItem from './StatisticItem.tsx'

function Statistics() {
  const products = useDataStore((state) => state.products.length)
  const suppliers = useDataStore((state) => state.suppliers.length)
  const customers = useDataStore((state) => state.customers.length)

  return (
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
      <StatisticItem title="all products" count={products} />
      <StatisticItem title="all suppliers" count={suppliers} />
      <StatisticItem title="all customers" count={customers} />
    </Box>
  )
}

export default Statistics