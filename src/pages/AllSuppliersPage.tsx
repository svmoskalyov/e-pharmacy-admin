import { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
import { useDataStore } from '../stores/dataStore.ts'
import Filter from '../components/Filter.tsx'
import Pagination from '../components/Pagination.tsx'
import AllSuppliers from '../components/AllSuppliers.tsx'
import Popup from '../components/ui/Popup.tsx'
import SupplierForm from '../components/SupplierForm.tsx'

type Suppliers = {
  id: string
  name: string
  address: string
  suppliers: string
  date: string
  amount: string
  status: string
}

function AllSuppliersPage() {
  const getData = useDataStore((state) => state.getData)
  const suppliers = useDataStore((state) => state.suppliers)
  const [filtered, setFiltered] = useState<Suppliers[]>(suppliers)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [openPopup, setOpenPopup] = useState<boolean>(false)

  const itemsPerPage = 5
  const filteredSorted = filtered.toReversed()
  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const supplierItems = filteredSorted.slice(startIndex, endIndex)

  const handleModal = () => {
    setOpenPopup(!openPopup)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleFilter = (newFilteredData: Suppliers[]) => {
    setFiltered(newFilteredData)
    setCurrentPage(1)
  }

  useEffect(() => {
    setFiltered(suppliers)
  }, [suppliers])

  useEffect(() => {
    if (!suppliers.length) getData('suppliers')
  }, [suppliers.length, getData])

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
            data={suppliers}
            keysToSearch={['name']}
            onFilter={handleFilter}
            placeholder="User Name"
          />
          <Button
            variant="outlined"
            onClick={handleModal}
            sx={{
              width: '177px',
              height: '44px',
              fontSize: '12px',
              fontWeight: 500,
              lineHeight: '18px',
              color: 'text.primary',
              backgroundColor: 'transparent',
              borderRadius: '60px',
              borderColor: 'acton.bg.edit',
              boxShadow: 'none',
              textTransform: 'none',
              '&:hover, &:focus': {
                boxShadow: 'none',
                color: 'accent.dark'
              }
            }}
          >
            Add a new suppliers
          </Button>
        </Box>

        <AllSuppliers suppliers={supplierItems} />
        {filtered.length > itemsPerPage && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </Box>

      <Popup open={openPopup} onClose={handleModal} title={'Add a new suppliers'}>
        <SupplierForm onClose={handleModal} />
      </Popup>
    </>
  )
}

export default AllSuppliersPage