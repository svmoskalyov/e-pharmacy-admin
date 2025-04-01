import { get, ref } from 'firebase/database'
import { firebaseData } from './firebaseConfig'

export const fetchData = async <T>(path: string): Promise<T[]> => {
  const dataRef = ref(firebaseData, path)
  try {
    const snapshot = await get(dataRef)
    const data = snapshot.val()
    if (data) {
      return Object.entries(data).map(([id, item]) => ({
        id,
        ...(item as unknown as Omit<T, 'id'>)
      })) as T[]
    } else {
      return []
    }
  } catch (error) {
    console.error(`Error retrieving data from ${path}:`, error)
    return []
  }
}
