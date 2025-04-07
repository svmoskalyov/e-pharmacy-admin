import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useDataStore } from '../stores/dataStore.ts'
import Filter from '../components/Filter.tsx'
import AllCustomers from '../components/AllCustomers.tsx'
import Pagination from '../components/Pagination.tsx'

type Customers = {
  'photo': string
  'name': string
  'email': string
  'spent': string
  'phone': string
  'address': string
  'register_date': string
}

function AllCustomersPage() {
  const getData = useDataStore((state) => state.getData)
  const customers = useDataStore((state) => state.customers)
  const [filtered, setFiltered] = useState<Customers[]>(customers)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 5

  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const customerItems = filtered.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleFilter = (newFilteredData: Customers[]) => {
    setFiltered(newFilteredData)
    setCurrentPage(1)
  }

  useEffect(() => {
    if (!customers.length) getData('customers')
    if (customers.length !== filtered.length) {
      setFiltered(customers)
    }
  }, [customers.length, getData])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Filter
        data={customers}
        keysToSearch={['name']}
        onFilter={handleFilter}
        placeholder="User Name"
      />
      <AllCustomers customers={customerItems} />
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

export default AllCustomersPage