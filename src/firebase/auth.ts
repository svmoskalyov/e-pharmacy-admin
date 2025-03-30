import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { firebaseAuth } from './firebaseConfig'

export async function firebaseSignIn(email: string, password: string) {
  return await signInWithEmailAndPassword(firebaseAuth, email, password)
}

export async function firebaseSignOut() {
  await signOut(firebaseAuth)
}
