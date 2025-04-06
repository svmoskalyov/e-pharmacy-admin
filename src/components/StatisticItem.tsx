import { Box, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'

interface StatisticItemProps {
  title: string
  count: number
}

function StatisticItem({ title = 'title', count = 0 }: StatisticItemProps) {
  return (
    <Stack
      sx={{
        justifyContent: 'space-between',
        padding: '14px',
        width: { mobile: '157px', tablet: '221px', desktop: '240px' },
        height: { mobile: '98px', tablet: '108px', desktop: '108px' },
        backgroundColor: 'bg.white',
        borderRadius: '8px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'accent2.grey'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {title === 'all products' ?
          (
            <Icon
              icon="streamline:money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance"
              width="18"
              height="18"
            />
          ) : (
            <Icon icon="ci:users" width="18" height="18" />
          )
        }
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: { mobile: '14px', tablet: '18px' },
            color: 'text.secondary',
            textTransform: 'capitalize'
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: { mobile: '16px', tablet: '24px' },
          fontWeight: 600,
          lineHeight: { mobile: '20px', tablet: '32px' },
          color: 'text.primary'
        }}
      >
        {count}
      </Typography>
    </Stack>
  )
}

export default StatisticItem