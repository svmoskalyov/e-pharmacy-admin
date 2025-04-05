import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useDataStore } from '../stores/dataStore.ts'
import Filter from '../components/Filter.tsx'
import Pagination from '../components/Pagination.tsx'
import AllProducts from '../components/AllProducts.tsx'

function AllProductsPage() {
  const getData = useDataStore((state) => state.getData)
  const products = useDataStore((state) => state.products)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 5

  const totalPages = Math.ceil(products.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const productItems = products.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    if (!products.length) getData('products')
  }, [products.length, getData])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Filter />
      <AllProducts products={productItems} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Box>
  )
}

export default AllProductsPage