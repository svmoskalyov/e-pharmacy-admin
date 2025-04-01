import {
  Paper, TableRow, TableHead, TableContainer, TableCell, TableBody,
  Table, Avatar, Typography
} from '@mui/material'

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
        marginBottom: '40px',
        width: '100%',
        borderRadius: '8px',
        boxShadow: 'none',
        overflow: 'hidden'
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          padding: '14px',
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '20px',
          backgroundColor: 'bg.green'
        }}
      >
        Recent Customers
      </Typography>
      <TableContainer sx={{ maxHeight: '422px' }}>
        <Table stickyHeader aria-label="recent customers table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  padding: '14px',
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '14px',
                  color: 'text.secondary',
                  backgroundColor: 'bg.white',
                  borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  padding: '14px',
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '14px',
                  color: 'text.secondary',
                  backgroundColor: 'bg.white',
                  borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  padding: '14px',
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '14px',
                  color: 'text.secondary',
                  backgroundColor: 'bg.white',
                  borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                }}
              >
                Spent
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    padding: '10px',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '14px',
                    borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                  }}
                >
                  <Avatar
                    src={row.photo}
                    sx={{ marginRight: 2, width: 24, height: 24 }}
                  />
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{
                    padding: '10px',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '14px',
                    borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                  }}
                >
                  {row.email}
                </TableCell>
                <TableCell
                  sx={{
                    padding: '10px',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '14px',
                    borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                  }}
                >
                  {row.spent}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default RecentCustomers
