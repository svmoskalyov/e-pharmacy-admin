import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useDataStore } from '../stores/dataStore.ts'
import Filter from '../components/Filter.tsx'
import Pagination from '../components/Pagination.tsx'
import AllSuppliers from '../components/AllSuppliers.tsx'

type Suppliers = {
  'id': string
  'name': string
  'address': string
  'suppliers': string
  'date': string
  'amount': string
  'status': string
}

function AllSuppliersPage() {
  const getData = useDataStore((state) => state.getData)
  const suppliers = useDataStore((state) => state.suppliers)
  const [filtered, setFiltered] = useState<Suppliers[]>(suppliers)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 5

  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const supplierItems = filtered.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleFilter = (newFilteredData: Suppliers[]) => {
    setFiltered(newFilteredData)
    setCurrentPage(1)
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
      <Filter
        data={suppliers}
        keysToSearch={['name']}
        onFilter={handleFilter}
        placeholder="User Name"
      />
      <AllSuppliers suppliers={supplierItems} />
      {filtered.length > itemsPerPage && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </Box>
  )
}

export default AllSuppliersPage