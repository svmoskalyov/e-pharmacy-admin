import { ChangeEvent, FormEvent, useState } from 'react'
import {
  Box, Button, FormControl, MenuItem, OutlinedInput, Select,
  SelectChangeEvent, styled
} from '@mui/material'
import { useDataStore } from '../stores/dataStore.ts'

const prodNewCategories = [
  'Medicine', 'Head', 'Hand', 'Dental Care', 'Skin Care', 'Eye Care',
  'Vitamins & Supplements', 'Orthopedic Products', 'Baby Care', 'Leg'
]

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  height: '44px',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '18px',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.bg.white,
  borderRadius: '60px',
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

interface ProductFormProps {
  prodItem?: {
    id: string
    photo: string
    name: string
    suppliers: string
    stock: string
    price: string
    category: string
  }
  onClose: () => void
}

interface ProdForm {
  name: string
  suppliers: string
  stock: string
  price: string
  category: string
}

function ProductForm({ prodItem, onClose }: ProductFormProps) {
  const addItem = useDataStore((state) => state.addItem)
  const editItem = useDataStore((state) => state.editItem)
  const [prodNew, setProdNew] = useState<ProdForm>(
    prodItem ? {
      name: prodItem.name,
      suppliers: prodItem.suppliers,
      stock: prodItem.stock,
      price: prodItem.price,
      category: prodItem.category
    } : {
      name: '',
      suppliers: '',
      stock: '',
      price: '',
      category: ''
    }
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement |
    HTMLTextAreaElement | HTMLSelectElement> | SelectChangeEvent<string>) => {
    const { name, value } = event.target
    setProdNew((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (prodItem) {
      const productNew = {
        ...prodNew,
        id: prodItem?.id,
        photo: prodItem?.photo
      }
      editItem('products', productNew)
    } else {
      const newId = new Date().getTime().toString()
      const productNew = { ...prodNew, id: newId, photo: '' }
      addItem('products', productNew)
    }

    setProdNew({
      name: '',
      suppliers: '',
      stock: '',
      price: '',
      category: ''
    })
    onClose()
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        marginTop: { mobile: '20px', tablet: '40px' }
      }}
    >
      <FormControl fullWidth required>
        <StyledOutlinedInput
          name="name"
          value={prodNew.name}
          onChange={handleChange}
          placeholder="Product Info"
        />
      </FormControl>
      <FormControl fullWidth required>
        <Select
          displayEmpty
          name="category"
          value={prodNew.category}
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
                  Category
                </span>
              )
            }
            return selected
          }}
        >
          {prodNewCategories.map((name) => (
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
      <FormControl fullWidth required>
        <StyledOutlinedInput
          name="suppliers"
          value={prodNew.suppliers}
          onChange={handleChange}
          placeholder="Suppliers"
        />
      </FormControl>
      <FormControl fullWidth required>
        <StyledOutlinedInput
          name="stock"
          value={prodNew.stock}
          onChange={handleChange}
          type="number"
          placeholder="Stock"
        />
      </FormControl>
      <FormControl fullWidth required>
        <StyledOutlinedInput
          name="price"
          value={prodNew.price}
          onChange={handleChange}
          type="number"
          placeholder="Price"
        />
      </FormControl>

      <Box
        sx={{
          display: 'flex',
          gap: '8px',
          marginTop: { mobile: '20px', tablet: '40px' }
        }}
      >
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
          {prodItem ? 'Save' : 'Add'}
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

export default ProductForm