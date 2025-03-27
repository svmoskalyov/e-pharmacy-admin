import {
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { firebaseAuth } from './firebaseConfig'

export async function signInWithCredentials(email: string, password: string) {
  try {
    return setPersistence(firebaseAuth, browserSessionPersistence).then(async () => {
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password)
      return {
        success: true,
        user: userCredential.user,
        error: null
      }
    })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to sign in with email/password'
    return {
      success: false,
      user: null,
      error: errorMessage
    }
  }
}

export const firebaseSignOut = async () => {
  try {
    await signOut(firebaseAuth)
    return { success: true }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An error occurred'
    return {
      success: false,
      error: errorMessage
    }
  }
}
