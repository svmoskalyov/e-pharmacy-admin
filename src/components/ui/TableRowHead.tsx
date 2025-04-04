import { ReactNode } from 'react'
import { TableCell, TableCellProps } from '@mui/material'

interface TableRowHeadProps extends TableCellProps {
  children: ReactNode;
}

function TableRowHead({ children, ...rest }: TableRowHeadProps) {
  return (
    <TableCell
      {...rest}
      sx={{
        padding: { mobile: '14px', tablet: '20px' },
        fontSize: { mobile: '12px', tablet: '14px' },
        fontWeight: 400,
        lineHeight: { mobile: '14px', tablet: '18px' },
        color: 'text.secondary',
        backgroundColor: 'bg.white',
        borderRight: '1px solid rgba(29, 30, 33, 0.1)',
        ...rest.sx
      }}
    >
      {children}
    </TableCell>
  )
}

export default TableRowHead