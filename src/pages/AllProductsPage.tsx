import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useDataStore } from '../stores/dataStore.ts'
import Filter from '../components/Filter.tsx'
import Pagination from '../components/Pagination.tsx'
import AllProducts from '../components/AllProducts.tsx'

type Products = {
  'id': string
  'photo': string
  'name': string
  'suppliers': string
  'stock': string
  'price': string
  'category': string
}

function AllProductsPage() {
  const getData = useDataStore((state) => state.getData)
  const products = useDataStore((state) => state.products)
  const [filtered, setFiltered] = useState<Products[]>(products)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 5

  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const productItems = filtered.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleFilter = (newFilteredData: Products[]) => {
    setFiltered(newFilteredData)
    setCurrentPage(1)
  }

  useEffect(() => {
    if (!products.length) getData('products')
    if (products.length !== filtered.length) {
      setFiltered(products)
    }
  }, [products.length, getData])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Filter
        data={products}
        keysToSearch={['name']}
        onFilter={handleFilter}
        placeholder="Product Name"
      />
      <AllProducts products={productItems} />
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

export default AllProductsPage