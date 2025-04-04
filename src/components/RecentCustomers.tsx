import {
  Avatar, Paper, Table, TableBody, TableContainer, TableHead, TableRow
} from '@mui/material'
import TableName from './ui/TableName.tsx'
import TableRowHead from './ui/TableRowHead.tsx'
import TableRowCell from './ui/TableRowCell.tsx'

interface RecentCustomersProps {
  customers: {
    photo: string
    name: string
    email: string
    spent: string
  }[]
}

function RecentCustomers({ customers }: RecentCustomersProps) {
  return (
    <Paper
      sx={{
        width: '100%',
        maxWidth: { mobile: '335px', tablet: '704px', desktop: '630px' },
        borderRadius: '8px',
        boxShadow: 'none',
        overflow: 'hidden'
      }}
    >
      <TableName>Recent Customers</TableName>
      <TableContainer sx={{ maxHeight: { mobile: '460px', tablet: '512px' } }}>
        <Table stickyHeader aria-label="recent customers table">
          <TableHead>
            <TableRow>
              <TableRowHead>Name</TableRowHead>
              <TableRowHead>Email</TableRowHead>
              <TableRowHead>Spent</TableRowHead>
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
                    gap: '8px'
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
                <TableRowCell>{row.email}</TableRowCell>
                <TableRowCell>{row.spent}</TableRowCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default RecentCustomers