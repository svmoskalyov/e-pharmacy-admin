export interface Identifiable {
  id: number | string;
  [key: string]: unknown;
}

export const addItemToArray = <T extends Identifiable>(
  array: T[],
  newItem: T
): T[] => {
  return [...array, newItem]
}

export const removeItemByIdFromArray = <T extends Identifiable>(
  array: T[],
  idToRemove: T['id']
): T[] => {
  return array.filter((item) => item.id !== idToRemove)
}

export const editItemInArray = <T extends Identifiable>(
  array: T[],
  updatedItem: T
): T[] => {
  return array.map((item) => (item.id === updatedItem.id ? updatedItem : item))
}