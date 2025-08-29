import React, { useState } from 'react'

function ItemForm({onAdd}) {
  const [text,setText]=useState("");

  const handleSubmit=(event)=>{
    event.preventDefault();
    if(text.trim()===""){
        return
    }else{
        onAdd(text);
        setText("");
    }
  }

  return (
    <div>
        <form className="flex gap-2 mb-6">
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter Item'
            className="border rounded p-2 w-64">            
            </input>
            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">Add</button>
        </form>
    </div>
  )
}

export default ItemForm
