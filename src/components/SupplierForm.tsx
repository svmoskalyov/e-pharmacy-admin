import { ChangeEvent, FormEvent, useState } from 'react'
import {
  Box, Button, FormControl, MenuItem, OutlinedInput, Select,
  SelectChangeEvent, styled
} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs'
import { useDataStore } from '../stores/dataStore.ts'

const suppStatus = ['Active', 'Deactive']

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  height: '44px',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '18px',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.bg.white,
  borderRadius: '60px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.accent2.gray
  },
  '&.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.accent.main,
      borderWidth: '1px'
    }
  },
  '&:hover:not(.Mui-focused)': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.accent.main
    }
  }
}))

const StyledButton = styled(Button)({
  height: '44px',
  fontWeight: 400,
  borderRadius: '60px',
  boxShadow: 'none',
  textTransform: 'none',
  '&:hover, &:focus': {
    boxShadow: 'none'
  }
})

const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '18px',
    color: theme.palette.text.primary
  },
  '& .MuiIconButton-root': {
    color: theme.palette.accent.main,
    '&:hover': {
      color: theme.palette.accent.dark
    }
  },
  '& .MuiSvgIcon-root': {
    color: 'inherit'
  },
  '& .MuiOutlinedInput-root': {
    height: '44px',
    borderRadius: '60px',
    '& fieldset': {
      borderColor: theme.palette.accent2.gray
    },
    '&:hover fieldset': {
      borderColor: theme.palette.accent.main
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.accent.dark,
      borderWidth: '1px'
    }
  }
}))

interface SupplierFormProps {
  suppItem?: {
    id: string
    name: string
    address: string
    suppliers: string
    date: string
    amount: string
    status: string
  }
  onClose: () => void
}

interface FormData {
  name: string
  address: string
  suppliers: string
  date: Dayjs
  amount: string
  status: string
}

function SupplierForm({ suppItem, onClose }: SupplierFormProps) {
  const addItem = useDataStore((state) => state.addItem)
  const editItem = useDataStore((state) => state.editItem)
  const [formData, setFormData] = useState<FormData>(
    suppItem ? {
      name: suppItem.name,
      address: suppItem.address,
      suppliers: suppItem.suppliers,
      date: dayjs(suppItem.date),
      amount: suppItem.amount,
      status: suppItem.status
    } : {
      name: '',
      address: '',
      suppliers: '',
      date: dayjs(),
      amount: '',
      status: ''
    }
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement |
    HTMLTextAreaElement | HTMLSelectElement> | SelectChangeEvent<string>) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleDateChange = (date: Dayjs | null) => {
    setFormData((prevData) => ({
      ...prevData,
      date: date || dayjs()
    }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (suppItem) {
      const formattedDate = formData.date.format('MMMM D, YYYY')
      const productNew = {
        ...formData,
        date: formattedDate,
        id: suppItem?.id
      }
      editItem('suppliers', productNew)
    } else {
      const newId = new Date().getTime().toString()
      const formattedDate = formData.date.format('MMMM D, YYYY')
      const productNew = {
        ...formData,
        date: formattedDate,
        id: newId
      }
      addItem('suppliers', productNew)
    }

    setFormData({
      name: '',
      address: '',
      suppliers: '',
      date: dayjs(),
      amount: '',
      status: ''
    })
    onClose()
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        paddingTop: { mobile: '20px', tablet: '40px' },
        paddingBottom: { mobile: '0', tablet: '20px' }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          rowGap: { mobile: '14px', tablet: '14px' },
          columnGap: { mobile: '14px', tablet: '8px' },
          paddingBottom: '40px'
        }}
      >
        <FormControl
          fullWidth
          required
          sx={{ width: { mobile: '100%', tablet: '224px' } }}
        >
          <StyledOutlinedInput
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Suppliers Info"
          />
        </FormControl>
        <FormControl
          fullWidth
          required
          sx={{ width: { mobile: '100%', tablet: '224px' } }}
        >
          <StyledOutlinedInput
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
        </FormControl>
        <FormControl
          fullWidth
          required
          sx={{ width: { mobile: '100%', tablet: '224px' } }}
        >
          <StyledOutlinedInput
            name="suppliers"
            value={formData.suppliers}
            onChange={handleChange}
            placeholder="Company"
          />
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <FormControl
            fullWidth
            required
            sx={{ width: { mobile: '100%', tablet: '224px' } }}
          >
            <StyledDatePicker
              format="MMMM D, YYYY"
              value={formData.date}
              onChange={handleDateChange}
              slotProps={{
                openPickerIcon: { fontSize: 'small' }
              }}
            />
          </FormControl>
        </LocalizationProvider>
        <FormControl
          fullWidth
          required
          sx={{ width: { mobile: '100%', tablet: '224px' } }}
        >
          <StyledOutlinedInput
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
          />
        </FormControl>
        <FormControl
          fullWidth
          required
          sx={{ width: { mobile: '100%', tablet: '224px' } }}
        >
          <Select
            displayEmpty
            name="status"
            value={formData.status}
            onChange={handleChange}
            input={<StyledOutlinedInput />}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: '140px',
                  backgroundColor: '#59B17A',
                  borderRadius: '15px'
                }
              }
            }}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return (
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '18px',
                      color: '#1D1E2166'
                    }}
                  >
                  Status
                </span>
                )
              }
              return selected
            }}
          >
            {suppStatus.map((name) => (
              <MenuItem
                key={name}
                value={name}
                sx={{
                  minHeight: '18px',
                  color: '#acd8bc',
                  padding: '4px 18px',
                  '&:hover': {
                    color: 'accent.contrastText',
                    backgroundColor: 'transparent'
                  },
                  '&.Mui-selected': {
                    color: 'accent.contrastText',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      backgroundColor: 'transparent'
                    }
                  },
                  '& .MuiTypography-root': {
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '18px',
                    color: 'accent.contrastText'
                  }
                }}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ display: 'flex', gap: '8px' }}>
        <StyledButton
          type="submit"
          variant="contained"
          sx={{
            width: { mobile: '146px', tablet: '133px' },
            fontSize: { mobile: '12px', tablet: '14px' },
            lineHeight: { mobile: '18px', tablet: '18px' },
            color: 'bg.white',
            backgroundColor: 'accent.main',
            '&:hover, &:focus': {
              backgroundColor: 'accent.dark'
            }
          }}
        >
          {suppItem ? 'Save' : 'Add'}
        </StyledButton>
        <StyledButton
          variant="contained"
          onClick={onClose}
          sx={{
            width: { mobile: '146px', tablet: '133px' },
            fontSize: { mobile: '12px', tablet: '14px' },
            lineHeight: { mobile: '18px', tablet: '18px' },
            color: 'text.secondary',
            backgroundColor: 'accent2.gray',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'transparent',
            '&:hover, &:focus': {
              color: 'accent.main',
              backgroundColor: 'bg.white',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'accent.main'
            }
          }}
        >
          Cancel
        </StyledButton>
      </Box>
    </Box>
  )
}

export default SupplierForm