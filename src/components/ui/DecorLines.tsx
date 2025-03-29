import { Box } from '@mui/material'

function DecorLines() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        rotate: '22deg'
      }}
    >
      <Box
        component="span"
        sx={{
          marginLeft: '100px',
          width: '336px',
          height: '71px',
          backgroundColor: 'accent.light',
          borderRadius: '60px'
        }}
      ></Box>
      <Box
        component="span"
        sx={{
          width: '336px',
          height: '71px',
          backgroundColor: 'accent.light',
          borderRadius: '60px'
        }}
      ></Box>
      <Box
        component="span"
        sx={{
          marginLeft: '60px',
          width: '336px',
          height: '71px',
          backgroundColor: 'accent.light',
          borderRadius: '60px'
        }}
      ></Box>
    </Box>
  )
}

export default DecorLines