import React from 'react'
import Item from "./Item";

function ItemList({ items, onDelete, onToggleView }) {
  return (
    <div className="w-full max-w-md space-y-3">
      {
        items.length===0?(
            <p className="text-gray-500 text-center">No items added yet.</p>
        ):(
            items.map((item)=>(
             <Item
            key={item.id}
            item={item}
            onDelete={onDelete}
            onToggleView={onToggleView}
          />
            ))
        )
      }
    </div>
  )
}

export default ItemList
