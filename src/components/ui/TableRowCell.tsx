import { ReactNode } from 'react'
import { TableCell, TableCellProps } from '@mui/material'

interface TableRowCellProps extends TableCellProps {
  children: ReactNode;
}

function TableRowCell({ children, ...rest }: TableRowCellProps) {
  return (
    <TableCell
      {...rest}
      sx={{
        padding: { mobile: '14px', tablet: '20px' },
        fontSize: { mobile: '12px', tablet: '14px' },
        fontWeight: 400,
        lineHeight: { mobile: '14px', tablet: '18px' },
        borderRight: '1px solid rgba(29, 30, 33, 0.1)',
        ...rest.sx
      }}
    >
      {children}
    </TableCell>
  )
}

export default TableRowCell