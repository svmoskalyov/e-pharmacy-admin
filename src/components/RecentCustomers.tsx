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
          padding: { mobile: '14px', tablet: '20px' },
          fontSize: { mobile: '16px', tablet: '18px' },
          fontWeight: 600,
          lineHeight: { mobile: '20px', tablet: '24px' },
          backgroundColor: 'bg.green'
        }}
      >
        Recent Customers
      </Typography>
      <TableContainer
        sx={{
          maxHeight: { mobile: '422px', tablet: '512px' }
        }}
      >
        <Table stickyHeader aria-label="recent customers table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  padding: { mobile: '14px', tablet: '20px' },
                  fontSize: { mobile: '12px', tablet: '14px' },
                  fontWeight: 400,
                  lineHeight: { mobile: '14px', tablet: '18px' },
                  color: 'text.secondary',
                  backgroundColor: 'bg.white',
                  borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  padding: { mobile: '14px', tablet: '20px' },
                  fontSize: { mobile: '12px', tablet: '14px' },
                  fontWeight: 400,
                  lineHeight: { mobile: '14px', tablet: '18px' },
                  color: 'text.secondary',
                  backgroundColor: 'bg.white',
                  borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  padding: { mobile: '14px', tablet: '20px' },
                  fontSize: { mobile: '12px', tablet: '14px' },
                  fontWeight: 400,
                  lineHeight: { mobile: '14px', tablet: '18px' },
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
            {customers.map((row, i) => (
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
                    borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                  }}
                >
                  {row.email}
                </TableCell>
                <TableCell
                  sx={{
                    padding: { mobile: '10px', tablet: '20px' },
                    fontSize: { mobile: '12px', tablet: '14px' },
                    fontWeight: 400,
                    lineHeight: { mobile: '14px', tablet: '18px' },
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
