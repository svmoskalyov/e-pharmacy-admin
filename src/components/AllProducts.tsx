import { useState } from 'react'
import {
  Paper, TableRow, TableHead, TableContainer, TableBody, Table, IconButton
} from '@mui/material'
import { Icon } from '@iconify/react'
import { useDataStore } from '../stores/dataStore.ts'
import TableName from './ui/TableName.tsx'
import TableRowHead from './ui/TableRowHead.tsx'
import TableRowCell from './ui/TableRowCell.tsx'
import Popup from './ui/Popup.tsx'
import ProductForm from './ProductForm.tsx'

interface AllProductsProps {
  products: {
    'id': string
    'photo': string
    'name': string
    'suppliers': string
    'stock': string
    'price': string
    'category': string
  }[]
}

interface Product {
  id: string
  photo: string
  name: string
  suppliers: string
  stock: string
  price: string
  category: string
}

function AllProducts({ products }: AllProductsProps) {
  const [openPopup, setOpenPopup] = useState<boolean>(false)
  const [productItem, setProductItem] = useState<Product>()
  const removeItemById = useDataStore((state) => state.removeItemById)

  const handleModal = () => {
    setOpenPopup(!openPopup)
  }

  const handleEdit = (id: string) => {
    setProductItem(products.find((item) => item.id === id))
    handleModal()
  }

  const handleDelete = (id: string) => {
    removeItemById('products', id)
  }

  return (
    <>
      <Paper
        sx={{
          width: '100%',
          maxWidth: { mobile: '335px', tablet: '704px', desktop: '1280px' },
          borderRadius: '8px',
          boxShadow: 'none',
          overflow: 'hidden'
        }}
      >
        <TableName>All products</TableName>
        <TableContainer
          sx={{
            maxHeight: { mobile: '460px', tablet: '502px', desktop: '541px' }
          }}
        >
          <Table stickyHeader aria-label="all products table">
            <TableHead>
              <TableRow>
                <TableRowHead sx={{ textWrap: 'nowrap' }}>
                  Product Info
                </TableRowHead>
                <TableRowHead sx={{ textWrap: 'nowrap' }}>
                  Category
                </TableRowHead>
                <TableRowHead sx={{ textWrap: 'nowrap' }}>
                  Stock
                </TableRowHead>
                <TableRowHead sx={{ textWrap: 'nowrap' }}>
                  Suppliers
                </TableRowHead>
                <TableRowHead sx={{ textWrap: 'nowrap' }}>
                  Price
                </TableRowHead>
                <TableRowHead sx={{ textWrap: 'nowrap' }}>
                  Action
                </TableRowHead>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row, i) => (
                <TableRow key={i}>
                  <TableRowCell sx={{ textWrap: 'nowrap' }}>
                    {row.name}
                  </TableRowCell>
                  <TableRowCell sx={{ textWrap: 'nowrap' }}>
                    {row.category}
                  </TableRowCell>
                  <TableRowCell sx={{ textWrap: 'nowrap' }}>
                    {row.stock}
                  </TableRowCell>
                  <TableRowCell sx={{ textWrap: 'nowrap' }}>
                    {row.suppliers}
                  </TableRowCell>
                  <TableRowCell sx={{ textWrap: 'nowrap' }}>
                    {row.price}
                  </TableRowCell>
                  <TableRowCell
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <IconButton
                      sx={{
                        height: '32px',
                        width: '32px',
                        color: 'acton.text.edit',
                        borderRadius: '60px',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: 'acton.bg.edit',
                        '&:hover': {
                          color: 'accent.dark',
                          backgroundColor: 'accent.light'
                        }
                      }}
                      onClick={() => handleEdit(row.id)}
                    >
                      <Icon
                        icon="majesticons:edit-pen-2-line"
                        width="16"
                        height="16"
                      />
                    </IconButton>
                    <IconButton
                      sx={{
                        height: '32px',
                        width: '32px',
                        color: 'acton.text.delete',
                        borderRadius: '60px',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: 'acton.bg.delete',
                        '&:hover': {
                          color: 'accent2.dark',
                          backgroundColor: 'accent2.light'
                        }
                      }}
                      onClick={() => handleDelete(row.id)}
                    >
                      <Icon
                        icon="majesticons:delete-bin-line"
                        width="16"
                        height="16"
                      />
                    </IconButton>
                  </TableRowCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Popup open={openPopup} onClose={handleModal} title={'Edit product'}>
        <ProductForm prodItem={productItem} onClose={handleModal} />
      </Popup>
    </>
  )
}

export default AllProducts
