import { useState } from 'react'

export function useShoppingList() {
  const [column1, setColumn1] = useState<string[]>()
  const [column2, setColumn2] = useState<string[]>()

  const moveItem = (
    item: string,
    sourceColumn: number,
    targetColumn: number
  ) => {}

  return { column1, column2, moveItem }
}
