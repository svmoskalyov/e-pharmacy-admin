import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { firebaseSignIn, firebaseSignOut } from '../firebase/auth.ts'

type Login = {
  email: string
  password: string
}

type State = {
  email: string | null
  isAuth: boolean
  isLoading: boolean
  error: string | null
}

type Actions = {
  setIsAuth: (isAuth: boolean) => void
  setIsLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  signIn: ({ email, password }: Login) => void
  signOut: () => void
}

const initialState: State = {
  email: null,
  isAuth: false,
  isLoading: false,
  error: null
}

export const useAuthStore = create<State & Actions>()(
  persist(
    set => ({
      ...initialState,
      setIsAuth: isAuth => set({ isAuth }),
      setIsLoading: isLoading => set({ isLoading }),
      setError: error => set({ error }),
      signIn: async ({ email, password }: Login) => {
        set({ isLoading: true, error: null })
        try {
          const { user } = await firebaseSignIn(email, password)
          if (user) {
            set({
              email: user.email,
              isAuth: true,
              error: null
            })
          }
        } catch (error) {
          set({ error: (error as Error).message })
        } finally {
          set({ isLoading: false })
        }
      },
      signOut: async () => {
        try {
          await firebaseSignOut()
          set(initialState)
        } catch (error) {
          set({ error: (error as Error).message })
        }
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        email: state.email,
        isAuth: state.isAuth
      })
    }
  )
)
