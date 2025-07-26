import React, { useEffect, useRef, useState } from 'react'
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
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

    useEffect(() => {
        if (item.length > 0 && quantity > 0) {
            setIsSubmitDisabled(false)
        } else {
            setIsSubmitDisabled(true)
        }
    }, [item, quantity])

    const handleShareLink = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        const listItems = state.items.map((item, index) => (
            `${state.items.length - index} - ${item.item} - ${item.quantity}`
        )).reverse().join('\n');
    
        const combinedText = `Inventrie List:\n\n${listItems}\n\nCheck out: https://inventrie.com/`;
    
        const data = {
            title: 'Inventrie List',
            text: combinedText,
        };
    
        if (navigator.share) {
            if (navigator.canShare && !navigator.canShare(data)) {
                alert('This browser does not support sharing this data.');
                return;
            }
            navigator.share(data);
        } else {
            alert('This browser does not support sharing.');
        }
    };

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
                    
                    <section>
                        <button 
                            onClick={(e) => handleAddToStore(e)} 
                            className='submit-btn'
                            disabled={isSubmitDisabled}
                        >Add to List</button>
                        <button 
                            onClick={(e) => handleShareLink(e)} 
                            className='share-btn'
                        >Share List</button>
                    </section>
                    <p>{state.items.length} items in list</p>
                </form>
            </div>
        </>
    )
}

export default EntryForm