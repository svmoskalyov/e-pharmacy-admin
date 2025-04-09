import { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { useDataStore } from '../stores/dataStore.ts'
import Filter from '../components/Filter.tsx'
import Pagination from '../components/Pagination.tsx'
import AllProducts from '../components/AllProducts.tsx'
import Popup from '../components/ui/Popup.tsx'
import ProductForm from '../components/ProductForm.tsx'

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
  const [openPopup, setOpenPopup] = useState<boolean>(false)

  const itemsPerPage = 5
  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const productItems = filtered.slice(startIndex, endIndex)

  const handleModal = () => {
    setOpenPopup(!openPopup)
  }

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
    <>
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
            data={products}
            keysToSearch={['name']}
            onFilter={handleFilter}
            placeholder="Product Name"
          />
          <Button
            variant="contained"
            onClick={handleModal}
            sx={{
              justifyContent: 'flex-start',
              gap: '8px',
              width: '177px',
              backgroundColor: 'transparent',
              borderRadius: '60px',
              padding: '0',
              fontWeight: 400,
              boxShadow: 'none',
              textTransform: 'none',
              '&:hover, &:focus': {
                boxShadow: 'none',
                '& .MuiTypography-root': {
                  color: 'accent.dark'
                },
                '& .MuiBox-root': {
                  backgroundColor: 'accent.dark'
                }
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'accent.main',
                borderRadius: '60px',
                height: '42px',
                width: '42px'
              }}
            >
              <Icon icon="majesticons:plus" width="24" height="24" />
            </Box>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '18px',
                color: 'text.primary'
              }}
            >
              Add a new product
            </Typography>
          </Button>
        </Box>
        <AllProducts products={productItems} />
        {filtered.length > itemsPerPage && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </Box>

      <Popup open={openPopup} onClose={handleModal} title={'Add a new product'}>
        <ProductForm new onClose={handleModal} />
      </Popup>
    </>
  )
}

export default AllProductsPage