import { IconButton } from '@mui/material'
import { Icon } from '@iconify/react'

function ButtonLogout() {
  return (
    <IconButton
      sx={{
        height: { mobile: '38px', tablet: '44px' },
        width: { mobile: '38px', tablet: '44px' },
        backgroundColor: 'accent.main',
        color: 'accent.contrastText'
      }}
      onClick={() => console.log('logout')}
    >
      <Icon icon="majesticons:logout" width="14" height="14" />
    </IconButton>
  )
}

export default ButtonLogout