import {
  Paper, TableRow, TableHead, TableContainer, TableCell, TableBody,
  Table, Avatar, Typography, Chip
} from '@mui/material'

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
      <Typography
        variant="h6"
        component="div"
        sx={{
          padding: { mobile: '14px', tablet: '20px' },
          fontSize: { mobile: '16px', tablet: '18px' },
          fontWeight: 600,
          lineHeight: { mobile: '20px', tablet: '24px' },
          backgroundColor: 'bg.green'
        }}
      >
        All Orders
      </Typography>
      <TableContainer
        sx={{
          maxHeight: { mobile: '460px', tablet: '502px', desktop: '541px' }
        }}
      >
        <Table stickyHeader aria-label="all orders table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  padding: { mobile: '14px', tablet: '20px' },
                  fontSize: { mobile: '12px', tablet: '14px' },
                  fontWeight: 400,
                  lineHeight: { mobile: '14px', tablet: '18px' },
                  textWrap: 'nowrap',
                  color: 'text.secondary',
                  backgroundColor: 'bg.white',
                  borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                }}
              >
                User Info
              </TableCell>
              <TableCell
                sx={{
                  padding: { mobile: '14px', tablet: '20px' },
                  fontSize: { mobile: '12px', tablet: '14px' },
                  fontWeight: 400,
                  lineHeight: { mobile: '14px', tablet: '18px' },
                  textWrap: 'nowrap',
                  color: 'text.secondary',
                  backgroundColor: 'bg.white',
                  borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                }}
              >
                Address
              </TableCell>
              <TableCell
                sx={{
                  padding: { mobile: '14px', tablet: '20px' },
                  fontSize: { mobile: '12px', tablet: '14px' },
                  fontWeight: 400,
                  lineHeight: { mobile: '14px', tablet: '18px' },
                  textWrap: 'nowrap',
                  color: 'text.secondary',
                  backgroundColor: 'bg.white',
                  borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                }}
              >
                Products
              </TableCell>
              <TableCell
                sx={{
                  padding: { mobile: '14px', tablet: '20px' },
                  fontSize: { mobile: '12px', tablet: '14px' },
                  fontWeight: 400,
                  lineHeight: { mobile: '14px', tablet: '18px' },
                  textWrap: 'nowrap',
                  color: 'text.secondary',
                  backgroundColor: 'bg.white',
                  borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                }}
              >
                Order date
              </TableCell>
              <TableCell
                sx={{
                  padding: { mobile: '14px', tablet: '20px' },
                  fontSize: { mobile: '12px', tablet: '14px' },
                  fontWeight: 400,
                  lineHeight: { mobile: '14px', tablet: '18px' },
                  textWrap: 'nowrap',
                  color: 'text.secondary',
                  backgroundColor: 'bg.white',
                  borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                }}
              >
                Price
              </TableCell>
              <TableCell
                sx={{
                  padding: { mobile: '14px', tablet: '20px' },
                  fontSize: { mobile: '12px', tablet: '14px' },
                  fontWeight: 400,
                  lineHeight: { mobile: '14px', tablet: '18px' },
                  textWrap: 'nowrap',
                  color: 'text.secondary',
                  backgroundColor: 'bg.white',
                  borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row, i) => (
              <TableRow key={i}>
                <TableCell
                  sx={{
                    display: 'flex',
                    flexDirection: { mobile: 'column', tablet: 'row' },
                    alignItems: { mobile: 'start', tablet: 'center' },
                    gap: '8px',
                    padding: { mobile: '10px', tablet: '20px' },
                    fontSize: { mobile: '12px', tablet: '14px' },
                    fontWeight: 400,
                    lineHeight: { mobile: '14px', tablet: '18px' },
                    textWrap: 'nowrap',
                    borderRight: '1px solid rgba(29, 30, 33, 0.1)'
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
                </TableCell>
                <TableCell
                  sx={{
                    padding: { mobile: '10px', tablet: '20px' },
                    fontSize: { mobile: '12px', tablet: '14px' },
                    fontWeight: 400,
                    lineHeight: { mobile: '14px', tablet: '18px' },
                    textWrap: 'nowrap',
                    borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                  }}
                >
                  {row.address}
                </TableCell>
                <TableCell
                  sx={{
                    padding: { mobile: '10px', tablet: '20px' },
                    fontSize: { mobile: '12px', tablet: '14px' },
                    fontWeight: 400,
                    lineHeight: { mobile: '14px', tablet: '18px' },
                    textWrap: 'nowrap',
                    borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                  }}
                >
                  {row.products}
                </TableCell>
                <TableCell
                  sx={{
                    padding: { mobile: '10px', tablet: '20px' },
                    fontSize: { mobile: '12px', tablet: '14px' },
                    fontWeight: 400,
                    lineHeight: { mobile: '14px', tablet: '18px' },
                    textWrap: 'nowrap',
                    borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                  }}
                >
                  {row.order_date}
                </TableCell>
                <TableCell
                  sx={{
                    padding: { mobile: '10px', tablet: '20px' },
                    fontSize: { mobile: '12px', tablet: '14px' },
                    fontWeight: 400,
                    lineHeight: { mobile: '14px', tablet: '18px' },
                    textWrap: 'nowrap',
                    borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                  }}
                >
                  {row.price}
                </TableCell>
                <TableCell
                  sx={{
                    padding: { mobile: '10px', tablet: '20px' },
                    borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                  }}
                >
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default AllOrders