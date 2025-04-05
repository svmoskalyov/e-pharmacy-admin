import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { fetchData } from '../firebase/data.ts'

type Customers = {
  'photo': string
  'name': string
  'email': string
  'spent': string
  'phone': string
  'address': string
  'register_date': string
}
type IncomeExpenses = {
  'name': string
  'amount': string
  'type': string
}
type Orders = {
  'photo': string
  'name': string
  'address': string
  'products': string
  'price': string
  'status': string
  'order_date': string
}
type Products = {
  'id': string
  'photo': string
  'name': string
  'suppliers': string
  'stock': string
  'price': string
  'category': string
}
type Suppliers = {
  'id': string
  'name': string
  'address': string
  'suppliers': string
  'date': string
  'amount': string
  'status': string
}

type State = {
  customers: Customers[]
  incomeExpenses: IncomeExpenses[]
  orders: Orders[]
  products: Products[]
  suppliers: Suppliers[]
  isLoading: boolean
  error: string | null
}

type Actions = {
  getData: (base: string) => void
  setIsLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
}

const initialState: State = {
  customers: [],
  incomeExpenses: [],
  orders: [],
  products: [],
  suppliers: [],
  isLoading: false,
  error: null
}

export const useDataStore = create<State & Actions>()(
  persist(
    set => ({
      ...initialState,
      getData: async (base: string) => {
        set({ isLoading: true, error: null })
        try {
          const data = await fetchData(base)
          set({ [base]: data })
        } catch (error) {
          set({ error: (error as Error).message })
        } finally {
          set({ isLoading: false })
        }
      },
      setIsLoading: isLoading => set({ isLoading }),
      setError: error => set({ error })
    }),
    {
      name: 'data-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        customers: state.customers,
        incomeExpenses: state.incomeExpenses,
        orders: state.orders,
        products: state.products,
        suppliers: state.suppliers
      })
    }
  )
)
