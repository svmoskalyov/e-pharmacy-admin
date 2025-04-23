import { Alert, AlertColor, AlertTitle } from '@mui/material'

interface AlertiProps {
  message: string;
  severity?: AlertColor;
}

function Alerti({ severity, message }: AlertiProps) {
  return (
    <Alert
      severity={severity}
      sx={{
        position: 'absolute',
        top: '0',
        right: '0',
        minWidth: '260px',
        maxWidth: '420px',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '18px',
      }}
    >
      <AlertTitle
        sx={{
          fontSize: '18px',
          fontWeight: 600,
          lineHeight: '24px',
          textTransform: 'capitalize'
        }}
      >
        {severity}
      </AlertTitle>
      {message}
    </Alert>
  )
}

export default Alerti