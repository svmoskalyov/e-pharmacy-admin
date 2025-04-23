import { IconButton } from '@mui/material'
import { Icon } from '@iconify/react'
import { useAuthStore } from '../../stores/authStore.ts'

function ButtonLogout() {
  const { signOut } = useAuthStore()

  return (
    <IconButton
      sx={{
        height: { mobile: '38px', tablet: '44px' },
        width: { mobile: '38px', tablet: '44px' },
        backgroundColor: 'accent.main',
        color: 'accent.contrastText',
        '&:hover': {
          backgroundColor: 'accent.dark'
        }
      }}
      onClick={signOut}
    >
      <Icon icon="majesticons:logout" width="14" height="14" />
    </IconButton>
  )
}

export default ButtonLogout