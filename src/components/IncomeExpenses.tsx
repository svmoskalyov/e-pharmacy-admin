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
        Income/Expenses
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
                colSpan={3}
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
                Today
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incomeExpenses.map((row, i) => (
              <TableRow key={i}>
                <TableCell
                  sx={{
                    padding: { mobile: '14px', tablet: '20px' },
                    fontSize: { mobile: '12px', tablet: '14px' },
                    fontWeight: 400,
                    lineHeight: { mobile: '14px', tablet: '18px' },
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
                      fontSize: { mobile: '12px', tablet: '14px' },
                      fontWeight: 400,
                      lineHeight: { mobile: '12px', tablet: '14px' },
                      borderRadius: '40px',
                      height: '23px',
                      width: '80px'
                    }}
                  />
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
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{
                    padding: { mobile: '10px', tablet: '20px' },
                    fontSize: { mobile: '12px', tablet: '14px' },
                    fontWeight: 400,
                    lineHeight: { mobile: '14px', tablet: '18px' },
                    color: row.type === 'Income' ?
                      'accent.main' : row.type === 'Expense' ?
                        'accent2.main' : 'text.primary',
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