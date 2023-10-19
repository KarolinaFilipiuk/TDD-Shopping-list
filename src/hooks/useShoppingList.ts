import { useState } from 'react'

export function useShoppingList() {
  const [column1, setColumn1] = useState<string[]>([
    'tomato',
    'kiwi',
    'apple',
    'banana',
    'pomelo',
  ])
  const [column2, setColumn2] = useState<string[]>([])

  const moveItem = (
    item: string,
    sourceColumn: number,
    targetColumn: number
  ) => {
    const sourceList = sourceColumn === 1 ? column1 : column2
    const targetList = targetColumn === 1 ? column1 : column2

    const updatedSourceList = sourceList.filter((i) => i !== item)
    const updatedTargetList = [...targetList, item]

    sourceColumn === 1
      ? setColumn1(updatedSourceList)
      : setColumn2(updatedSourceList)
    targetColumn === 1
      ? setColumn1(updatedTargetList)
      : setColumn2(updatedTargetList)
  }

  return { column1, column2, moveItem }
}
