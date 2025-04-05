import {
  Paper, TableRow, TableHead, TableContainer, TableBody, Table, Avatar, Chip
} from '@mui/material'
import TableName from './ui/TableName.tsx'
import TableRowHead from './ui/TableRowHead.tsx'
import TableRowCell from './ui/TableRowCell.tsx'

interface AllOrdersProps {
  orders: {
    'photo': string
    'name': string
    'address': string
    'products': string
    'price': string
    'status': string
    'order_date': string
  }[]
}

function AllOrders({ orders }: AllOrdersProps) {
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
      <TableName>All orders</TableName>
      <TableContainer
        sx={{
          maxHeight: { mobile: '460px', tablet: '502px', desktop: '541px' }
        }}
      >
        <Table stickyHeader aria-label="all orders table">
          <TableHead>
            <TableRow>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                User Info
              </TableRowHead>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                Address
              </TableRowHead>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                Products
              </TableRowHead>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                Order date
              </TableRowHead>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                Price
              </TableRowHead>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                Status
              </TableRowHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row, i) => (
              <TableRow key={i}>
                <TableRowCell
                  sx={{
                    display: 'flex',
                    flexDirection: { mobile: 'column', tablet: 'row' },
                    alignItems: { mobile: 'start', tablet: 'center' },
                    gap: '8px',
                    textWrap: 'nowrap'
                  }}
                >
                  <Avatar
                    src={row.photo}
                    sx={{
                      width: { mobile: '24px', tablet: '36px' },
                      height: { mobile: '24px', tablet: '36px' }
                    }}
                  />
                  {row.name}
                </TableRowCell>
                <TableRowCell sx={{ textWrap: 'nowrap' }}>
                  {row.address}
                </TableRowCell>
                <TableRowCell sx={{ textWrap: 'nowrap' }}>
                  {row.products}
                </TableRowCell>
                <TableRowCell sx={{ textWrap: 'nowrap' }}>
                  {row.order_date}
                </TableRowCell>
                <TableRowCell sx={{ textWrap: 'nowrap' }}>
                  {row.price}
                </TableRowCell>
                <TableRowCell>
                  <Chip
                    label={row.status}
                    sx={{
                      height: '25px',
                      fontSize: { mobile: '12px', tablet: '14px' },
                      fontWeight: 400,
                      lineHeight: { mobile: '14px', tablet: '16px' },
                      color: `status.text.${row.status.toLowerCase()}`,
                      backgroundColor: `status.bg.${row.status.toLowerCase()}`
                    }}
                  />
                </TableRowCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default AllOrders