import { render, screen } from '@testing-library/react'
import PickedList from './PickedList'

test('renders PickedList component with items', () => {
  const items = ['item1', 'item2', 'item3']
  const onItemUnpick = jest.fn()

  render(<PickedList items={items} onItemUnpick={onItemUnpick} />)

  items.forEach((item) => {
    const itemElement = screen.getByText(item)
    expect(itemElement).toBeInTheDocument()
  })
})

test('renders PickedList component with a title', () => {
  const items = ['item1', 'item2', 'item3']
  const onItemUnpick = jest.fn()

  render(<PickedList items={items} onItemUnpick={onItemUnpick} />)

  const titleElement = screen.getByText('Fruit I have')
  expect(titleElement).toBeInTheDocument()
})
