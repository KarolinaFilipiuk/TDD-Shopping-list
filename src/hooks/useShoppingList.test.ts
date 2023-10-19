import { renderHook, act } from '@testing-library/react'
import { useShoppingList } from './useShoppingList'

test('initial state of column1 is as expected', () => {
  const { result } = renderHook(() => useShoppingList())
  expect(result.current.column1).toEqual([
    'tomato',
    'kiwi',
    'apple',
    'banana',
    'pomelo',
  ])
})

test('initial state of column2 is an empty array', () => {
  const { result } = renderHook(() => useShoppingList())
  expect(result.current.column2).toEqual([])
})

test('moving an item from column1 to column2 works', () => {
  const { result } = renderHook(() => useShoppingList())

  act(() => {
    result.current.moveItem('tomato', 1, 2)
  })

  expect(result.current.column1).toEqual(['kiwi', 'apple', 'banana', 'pomelo'])
  expect(result.current.column2).toEqual(['tomato'])
})
