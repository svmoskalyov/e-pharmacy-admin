import {
  Paper, TableRow, TableHead, TableContainer, TableBody, Table, Chip
} from '@mui/material'
import TableName from './ui/TableName.tsx'
import TableRowHead from './ui/TableRowHead.tsx'
import TableRowCell from './ui/TableRowCell.tsx'

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
        maxWidth: { mobile: '335px', tablet: '704px', desktop: '630px' },
        borderRadius: '8px',
        boxShadow: 'none',
        overflow: 'hidden'
      }}
    >
      <TableName>Income/Expenses</TableName>
      <TableContainer sx={{ maxHeight: { mobile: '511px', tablet: '512px' } }}>
        <Table stickyHeader aria-label="recent customers table">
          <TableHead>
            <TableRow>
              <TableRowHead colSpan={3}>Today</TableRowHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {incomeExpenses.map((row, i) => (
              <TableRow key={i}>
                <TableRowCell>
                  <Chip
                    label={row.type}
                    sx={{
                      height: '23px',
                      width: '80px',
                      backgroundColor: row.type === 'Income' ?
                        'accent.light' : row.type === 'Expense' ?
                          'accent2.light' : 'accent2.gray',
                      color: row.type === 'Income' ?
                        'accent.main' : row.type === 'Expense' ?
                          'accent2.main' : 'text.primary',
                      fontSize: { mobile: '12px', tablet: '14px' },
                      fontWeight: 400,
                      lineHeight: { mobile: '12px', tablet: '14px' },
                      borderRadius: '40px'
                    }}
                  />
                </TableRowCell>
                <TableRowCell>{row.name}</TableRowCell>
                <TableRowCell
                  sx={{
                    color: row.type === 'Income' ?
                      'accent.main' : row.type === 'Expense' ?
                        'accent2.main' : 'text.primary',
                    textDecoration: row.type === 'Error' ?
                      'line-through' : 'none'
                  }}
                >
                  {row.amount}
                </TableRowCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default IncomeExpenses