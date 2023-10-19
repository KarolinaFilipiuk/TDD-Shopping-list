import React from 'react'

interface ShoppingListProps {
  items: string[]
  onItemPick: (item: string) => void
}

const ShoppingList: React.FC<ShoppingListProps> = ({ items, onItemPick }) => {
  return <></>
}

export default ShoppingList
