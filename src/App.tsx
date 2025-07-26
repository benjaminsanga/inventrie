import { useEffect, useState } from 'react';
import { addItem, removeItem, clearItems } from './features/items-slice'
import { useAppDispatch } from './features/hooks'
import './App.css';
import EntryForm from './components/EntryForm';
import ItemsList from './components/ItemsList';

function App() {

  const [item, setItem] = useState('') // form item hook 
  const [wordCount, setWordCount] = useState(0)
  const [quantity, setQuantity] = useState(0) // form item quantity hook
  const dispatch = useAppDispatch() // hook for dispatching actions to store

  // hook to sync locally store items with redux store
  useEffect(() => {    
    // Clear any existing items first to prevent duplicates
    dispatch(clearItems());
    
    for (let storageItemKey in localStorage) {
      // use the item key to check for valid date
      if (new Date(storageItemKey).toString().match(/[0-9]/g) === null) continue

      const value = localStorage.getItem(storageItemKey)
      if (!value) continue
      let item: { item: string, quantity: number, date: string } | null = null
      try {
        item = JSON.parse(value)
      } catch (e) {
        // skip invalid JSON
        continue
      }
      // check that item has the expected shape
      if (!item || typeof item.item !== 'string' || typeof item.quantity !== 'number' || typeof item.date !== 'string') continue
      dispatch(addItem({
        item: item.item,
        quantity: item.quantity,
        date: item.date
      }))
    }
  }, [])

  const handleChangeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    // check that field is not empty
    if (e.currentTarget.value.length < 0 || e.currentTarget.value.length > 45) return
    setWordCount(e.target.value.length)
    setItem(e.target.value)
  }

  const handleChangeQuantity = (count: number) => {
    // check field value type and count value
    if (!(typeof count === 'number' && count > -1)) return
    setQuantity(count)
  }

  const handleAddToStore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // check for validation
    if (item.length <= 0 || quantity <= 0) return
    
    dispatch( addItem({
      item,
      quantity,
      date: `${new Date().toLocaleString()}`
    }) )

    setItem('')
    setWordCount(0)
    setQuantity(0)

  }

  const handleRemoveItem = (index: number) => {
    // check for valid index number
    if (index < 0) return
    dispatch ( removeItem(index) )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inventrie</h1>
      </header>
      <main>
        <EntryForm 
          item={item} 
          wordCount={wordCount}
          quantity={quantity} 
          handleChangeItem={handleChangeItem} 
          handleChangeQuantity={handleChangeQuantity} 
          handleAddToStore={handleAddToStore} 
        />

        <ItemsList handleRemoveItem={handleRemoveItem} />
      </main>
      <footer>
        <div>
          <img src="./public/LinkedIn_logo.png" alt="LinkedIn" className='img-logo' />
          <a href='https://www.linkedin.com/in/benjamin-sanga/' target={'_blank'}>Benjamin Sanga</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
