import { render, fireEvent, screen } from '@testing-library/react'
import App from './App'

test('renders App component with ShoppingList and PickedList components', () => {
  render(<App />)

  const appTitle = screen.getByText('Shop list')
  const shoppingListTitle = screen.getByText('Fruit I need to buy')
  const pickedListTitle = screen.getByText('Fruit I have')
  const shoppingListItems = screen.getAllByRole('listitem')

  expect(appTitle).toBeInTheDocument()
  expect(shoppingListTitle).toBeInTheDocument()
  expect(pickedListTitle).toBeInTheDocument()
  expect(shoppingListItems).toHaveLength(5)
})

test('moving an item from ShoppingList to PickedList works', () => {
  render(<App />)

  const itemToMove = screen.getByText('tomato')
  fireEvent.click(itemToMove)

  const shoppingListItems = screen.queryAllByTestId('shopping-list-item')
  const pickedListItems = screen.queryAllByTestId('picked-list-item')

  expect(shoppingListItems).toHaveLength(4)
  expect(pickedListItems).toHaveLength(1)
})

test('moving an item from PickedList to ShoppingList works', () => {
  render(<App />)

  const itemToMove = screen.getByText('tomato')
  fireEvent.click(itemToMove)

  const nextItemToMove = screen.getByText('tomato')
  fireEvent.click(nextItemToMove)

  const shoppingListItems = screen.queryAllByTestId('shopping-list-item')
  const pickedListItems = screen.queryAllByTestId('picked-list-item')

  expect(shoppingListItems).toHaveLength(5)
  expect(pickedListItems).toHaveLength(0)
})
