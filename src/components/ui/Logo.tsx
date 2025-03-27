import { Box } from '@mui/material'
import logo from '../../assets/icons/logo.svg'

function Logo() {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        height: { mobile: '32px', tablet: '40px', desktop: '32px' },
        width: { mobile: '32px', tablet: '40px', desktop: '32px' }
      }}
    >
      <img src={logo} alt="logo" />
    </Box>
  )
}

export default Logo