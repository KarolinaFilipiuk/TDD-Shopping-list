import { render, screen, fireEvent } from '@testing-library/react'
import ShoppingList from './ShoppingList'

test('renders ShoppingList component with items', () => {
  const items = ['item1', 'item2', 'item3']
  const onItemPick = jest.fn()

  render(<ShoppingList items={items} onItemPick={onItemPick} />)

  items.forEach((item) => {
    const itemElement = screen.getByText(item)
    expect(itemElement).toBeInTheDocument()
  })
})

test('clicking on an item calls onItemPick', () => {
  const items = ['item1', 'item2', 'item3']
  const onItemPick = jest.fn()

  render(<ShoppingList items={items} onItemPick={onItemPick} />)

  const itemElement = screen.getByText('item1')
  fireEvent.click(itemElement)

  expect(onItemPick).toHaveBeenCalledWith('item1')
})
