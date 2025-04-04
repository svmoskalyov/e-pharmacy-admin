import { ReactNode } from 'react'
import { Typography, TypographyProps } from '@mui/material'

interface TableNameProps extends TypographyProps {
  children: ReactNode;
}

function TableName({ children, ...rest }: TableNameProps) {
  return (
    <Typography
      {...rest}
      sx={{
        padding: { mobile: '14px', tablet: '20px' },
        fontSize: { mobile: '16px', tablet: '18px' },
        fontWeight: 600,
        lineHeight: { mobile: '20px', tablet: '24px' },
        backgroundColor: 'bg.green',
        ...rest.sx
      }}
    >
      {children}
    </Typography>
  )
}

export default TableName