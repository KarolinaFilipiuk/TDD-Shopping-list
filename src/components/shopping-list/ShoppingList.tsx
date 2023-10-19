import React from 'react'

interface ShoppingListProps {
  items: string[]
  onItemPick: (item: string) => void
}

const ShoppingList: React.FC<ShoppingListProps> = ({ items, onItemPick }) => {
  return (
    <div className='column'>
      <h2>Fruit I need to buy</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => onItemPick(item)}
            data-testid='shopping-list-item'
            data-list='shoppingList'
          >
            <span className='item'>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
