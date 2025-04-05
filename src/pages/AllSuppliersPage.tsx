import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useDataStore } from '../stores/dataStore.ts'
import Filter from '../components/Filter.tsx'
import Pagination from '../components/Pagination.tsx'
import AllSuppliers from '../components/AllSuppliers.tsx'

function AllSuppliersPage() {
  const getData = useDataStore((state) => state.getData)
  const suppliers = useDataStore((state) => state.suppliers)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 5

  const totalPages = Math.ceil(suppliers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const supplierItems = suppliers.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    if (!suppliers.length) getData('suppliers')
  }, [suppliers.length, getData])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Filter />
      <AllSuppliers suppliers={supplierItems} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Box>
  )
}

export default AllSuppliersPage