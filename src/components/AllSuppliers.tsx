import {
  Paper, TableRow, TableHead, TableContainer, TableBody, Table, Chip, Button
} from '@mui/material'
import { Icon } from '@iconify/react'
import TableName from './ui/TableName.tsx'
import TableRowHead from './ui/TableRowHead.tsx'
import TableRowCell from './ui/TableRowCell.tsx'

interface AllSuppliersProps {
  suppliers: {
    'id': string
    'name': string
    'address': string
    'suppliers': string
    'date': string
    'amount': string
    'status': string
  }[]
}

function AllSuppliers({ suppliers }: AllSuppliersProps) {

  const handleEdit = (id: string) => {
    console.log('Edit product with id:', id)
  }

  return (
    <Paper
      sx={{
        width: '100%',
        maxWidth: { mobile: '335px', tablet: '704px', desktop: '1280px' },
        borderRadius: '8px',
        boxShadow: 'none',
        overflow: 'hidden'
      }}
    >
      <TableName>All suppliers</TableName>
      <TableContainer
        sx={{
          maxHeight: { mobile: '460px', tablet: '502px', desktop: '541px' }
        }}
      >
        <Table stickyHeader aria-label="all orders table">
          <TableHead>
            <TableRow>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                Suppliers Info
              </TableRowHead>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                Address
              </TableRowHead>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                Company
              </TableRowHead>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                Delivery date
              </TableRowHead>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                Ammount
              </TableRowHead>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                Status
              </TableRowHead>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                Action
              </TableRowHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {suppliers.map((row, i) => (
              <TableRow key={i}>
                <TableRowCell sx={{ textWrap: 'nowrap' }}>
                  {row.name}
                </TableRowCell>
                <TableRowCell sx={{ textWrap: 'nowrap' }}>
                  {row.address}
                </TableRowCell>
                <TableRowCell sx={{ textWrap: 'nowrap' }}>
                  {row.suppliers}
                </TableRowCell>
                <TableRowCell sx={{ textWrap: 'nowrap' }}>
                  {row.date}
                </TableRowCell>
                <TableRowCell sx={{ textWrap: 'nowrap' }}>
                  {row.amount}
                </TableRowCell>
                <TableRowCell>
                  <Chip
                    label={row.status}
                    sx={{
                      height: '25px',
                      fontSize: { mobile: '12px', tablet: '14px' },
                      fontWeight: 400,
                      lineHeight: { mobile: '14px', tablet: '16px' },
                      backgroundColor: row.status === 'Active' ?
                        'accent.light' : 'accent2.light',
                      color: row.status === 'Active' ?
                        'accent.main' : 'accent2.main'
                    }}
                  />
                </TableRowCell>
                <TableRowCell>
                  <Button
                    sx={{
                      gap: '4px',
                      height: '34px',
                      width: '82px',
                      fontSize: { mobile: '14px', tablet: '16px' },
                      fontWeight: 400,
                      lineHeight: { mobile: '16px', tablet: '18px' },
                      textTransform: 'capitalize',
                      color: 'acton.text.edit',
                      borderRadius: '30px',
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
                      width="14"
                      height="14"
                    />
                    Edit
                  </Button>
                </TableRowCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default AllSuppliers