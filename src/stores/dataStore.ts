import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { fetchData } from '../firebase/data.ts'
import {
  addItemToArray, removeItemByIdFromArray, editItemInArray, Identifiable
} from '../utils/arrayUtils.ts'

interface Customers extends Identifiable {
  id: string
  photo: string
  name: string
  email: string
  spent: string
  phone: string
  address: string
  register_date: string
}

interface IncomeExpenses extends Identifiable {
  id: string
  name: string
  amount: string
  type: string
}

interface Orders extends Identifiable {
  id: string
  photo: string
  name: string
  address: string
  products: string
  price: string
  status: string
  order_date: string
}

interface Products extends Identifiable {
  id: string
  photo: string
  name: string
  suppliers: string
  stock: string
  price: string
  category: string
}

interface Suppliers extends Identifiable {
  id: string
  name: string
  address: string
  suppliers: string
  date: string
  amount: string
  status: string
}

type ArrayName = 'customers' | 'incomeExpenses' | 'orders' |
  'products' | 'suppliers'

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
  addItem: <T extends Identifiable>(
    arrayName: ArrayName, newItem: T) => void
  editItem: <T extends Identifiable>(
    arrayName: ArrayName, updatedItem: T) => void
  removeItemById: <T extends Identifiable>(
    arrayName: ArrayName, idToRemove: T['id']) => void
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
      addItem: <T extends Identifiable>(
        arrayName: ArrayName, newItem: T) =>
        set((state) => ({
          [arrayName]: addItemToArray<T>(
            (state[arrayName] as unknown) as T[], newItem)
        })),
      editItem: <T extends Identifiable>(
        arrayName: ArrayName, updatedItem: T) =>
        set((state) => ({
          [arrayName]: editItemInArray<T>(
            (state[arrayName] as unknown) as T[], updatedItem)
        })),
      removeItemById: <T extends Identifiable>(
        arrayName: ArrayName, idToRemove: T['id']) =>
        set((state) => ({
          [arrayName]: removeItemByIdFromArray<T>(
            (state[arrayName] as unknown) as T[], idToRemove)
        })),
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
