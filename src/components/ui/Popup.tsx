import { ReactNode } from 'react'
import { Box, IconButton, Modal, Typography } from '@mui/material'
import { Icon } from '@iconify/react'

interface PopupProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

const styleBox = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  padding: { mobile: '40px 20px', tablet: '40px' },
  width: { mobile: '335px', tablet: '536px' },
  backgroundColor: 'bg.white',
  borderRadius: '12px',
  transform: 'translate(-50%, -50%)'
}

function Popup({ open, onClose, title, children }: PopupProps) {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title">
      <Box sx={styleBox}>
        <Typography
          id="modal-modal-title"
          component="h2"
          sx={{
            fontSize: { mobile: '20px', tablet: '24px' },
            lineHeight: '24px',
            fontWeight: 600,
            color: 'text.primary'
          }}
        >
          {title}
        </Typography>
        {children}
        <IconButton
          aria-label="button close modal"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '0',
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}
        >
          <Icon icon="majesticons:close" width="24" height="24" />
        </IconButton>
      </Box>
    </Modal>
  )
}

export default Popup