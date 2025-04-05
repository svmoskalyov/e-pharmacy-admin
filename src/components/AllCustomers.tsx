import {
  Paper, TableRow, TableHead, TableContainer, TableBody, Table, Avatar, Chip
} from '@mui/material'
import TableName from './ui/TableName.tsx'
import TableRowHead from './ui/TableRowHead.tsx'
import TableRowCell from './ui/TableRowCell.tsx'

interface AllCustomersProps {
  customers: {
    'photo': string
    'name': string
    'email': string
    'spent': string
    'phone': string
    'address': string
    'register_date': string
  }[]
}

function AllCustomers({ customers }: AllCustomersProps) {
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
      <TableName>Customers Data</TableName>
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
                Email
              </TableRowHead>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                Address
              </TableRowHead>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                Phone
              </TableRowHead>
              <TableRowHead sx={{ textWrap: 'nowrap' }}>
                Register date
              </TableRowHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((row, i) => (
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
                  {row.email}
                </TableRowCell>
                <TableRowCell sx={{ textWrap: 'nowrap' }}>
                  {row.address}
                </TableRowCell>
                <TableRowCell sx={{ textWrap: 'nowrap' }}>
                  {row.phone}
                </TableRowCell>
                <TableRowCell sx={{ textWrap: 'nowrap' }}>
                  {row.register_date}
                </TableRowCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default AllCustomers