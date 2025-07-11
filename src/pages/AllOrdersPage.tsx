import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useDataStore } from '../stores/dataStore.ts'
import Filter from '../components/Filter.tsx'
import AllOrders from '../components/AllOrders.tsx'
import Pagination from '../components/Pagination.tsx'

type Orders = {
  'photo': string
  'name': string
  'address': string
  'products': string
  'price': string
  'status': string
  'order_date': string
}

function AllOrdersPage() {
  const getData = useDataStore((state) => state.getData)
  const orders = useDataStore((state) => state.orders)
  const [filtered, setFiltered] = useState<Orders[]>(orders)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const itemsPerPage = 5
  const filteredSorted = filtered.toReversed()
  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const orderItems = filteredSorted.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleFilter = (newFilteredData: Orders[]) => {
    setFiltered(newFilteredData)
    setCurrentPage(1)
  }

  useEffect(() => {
    setFiltered(orders)
  }, [orders])

  useEffect(() => {
    if (!orders.length) getData('orders')
  }, [orders.length, getData])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '20px',
          padding: '20px 0',
          width: '100%'
        }}
      >
        <Filter
          data={orders}
          keysToSearch={['name']}
          onFilter={handleFilter}
          placeholder="User Name"
        />
      </Box>
      <AllOrders orders={orderItems} />
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

export default AllOrdersPage