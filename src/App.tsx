import ShoppingList from './components/shopping-list/ShoppingList'
import PickedList from './components/picked-list/PickedList'
import { useShoppingList } from './hooks/useShoppingList'
import './App.css'

const App = () => {
  const { column1, column2, moveItem } = useShoppingList()

  return (
    <div className='App'>
      <h1>Shop list</h1>
      <div className='columns'>
        <ShoppingList
          items={column1}
          onItemPick={(item) => moveItem(item, 1, 2)}
        />
        <PickedList
          items={column2}
          onItemUnpick={(item) => moveItem(item, 2, 1)}
        />
      </div>
    </div>
  )
}

export default App
