import React from 'react'

interface PickedListProps {
  items: string[]
  onItemUnpick: (item: string) => void
}

const PickedList: React.FC<PickedListProps> = ({ items, onItemUnpick }) => {
  return (
    <div className='column'>
      <h2>Fruit I have</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => onItemUnpick(item)}
            data-testid='picked-list-item'
          >
            <span className='item'>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PickedList
