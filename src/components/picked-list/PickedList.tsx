import React from 'react'

interface PickedListProps {
  items: string[]
  onItemUnpick: (item: string) => void
}

const PickedList: React.FC<PickedListProps> = ({ items, onItemUnpick }) => {
  return <div></div>
}

export default PickedList
