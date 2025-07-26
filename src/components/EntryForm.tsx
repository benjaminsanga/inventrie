import React, { useRef } from 'react'
import { useAppSelector } from '../features/hooks'

interface EntryFormType {
    item: string,
    wordCount: number,
    quantity: number,
    handleChangeItem: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangeQuantity: (count: number) => void,
    handleAddToStore: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const EntryForm = ({ item, wordCount, quantity, handleChangeItem, handleChangeQuantity, handleAddToStore }: EntryFormType) => {

    const itemInputRef = useRef<HTMLInputElement | null>(null)
    const state = useAppSelector(state => state.itemSlice)

    return (
        <>
            <div>
                <p>Keep a consistent list of all your needs.</p><br /><br />

                <form>
                    <span>What do you need to add?</span>
                    <input
                        type={'text'}
                        onChange={(e) => handleChangeItem(e)}
                        placeholder='Type name of item here...'
                        value={item}
                        autoFocus
                        ref={itemInputRef} 
                    />
                    <span>{wordCount}/45</span>
                    <br /><br />

                    <span>Quantity</span>
                    <input type={'text'} placeholder={'quantity'} value={quantity} onChange={e => { handleChangeQuantity(+e.target.value) }} className='quantity' />

                    <button onClick={(e) => {
                        e.preventDefault()
                        if (quantity < 0) return
                        handleChangeQuantity(quantity - 1)
                    }} className='quantity-btn'><b>-</b></button>

                    <button onClick={(e) => {
                        e.preventDefault()
                        handleChangeQuantity(quantity + 1)
                    }} className='quantity-btn'><b>+</b></button>
                    <br /><br />
                    
                    <button onClick={(e) => handleAddToStore(e)}>Add to List</button>
                    <p>{state.items.length} items in list</p>
                </form>
            </div>
        </>
    )
}

export default EntryForm