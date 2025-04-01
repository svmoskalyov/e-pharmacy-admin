import {
  Paper, TableRow, TableHead, TableContainer, TableCell, TableBody,
  Table, Typography, Chip
} from '@mui/material'

interface IncomeExpensesProps {
  incomeExpenses: {
    name: string
    amount: string
    type: string
  }[]
}

function IncomeExpenses({ incomeExpenses }: IncomeExpensesProps) {
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
        Income/Expenses
      </Typography>
      <TableContainer sx={{ maxHeight: '422px' }}>
        <Table stickyHeader aria-label="recent customers table">
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={3}
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
                Today
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incomeExpenses.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  sx={{
                    padding: '10px',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '14px',
                    borderRight: '1px solid rgba(29, 30, 33, 0.1)'
                  }}
                >
                  <Chip
                    label={row.type}
                    sx={{
                      backgroundColor: row.type === 'Income' ?
                        'accent.light' : row.type === 'Expense' ?
                          'accent2.light' : 'accent2.grey',
                      color: row.type === 'Income' ?
                        'accent.main' : row.type === 'Expense' ?
                          'accent2.main' : 'text.primary',
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '12px',
                      borderRadius: '40px',
                      height: '23px',
                      width: '80px'
                    }}
                  />
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
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{
                    padding: '10px',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '14px',
                    borderRight: '1px solid rgba(29, 30, 33, 0.1)',
                    textDecoration: row.type === 'Error' ?
                      'line-through' : 'none'
                  }}
                >
                  {row.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default IncomeExpenses