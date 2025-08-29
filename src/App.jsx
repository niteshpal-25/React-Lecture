import './App.css'
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'
import React, { useState } from 'react'

function App() {
  const [items, setItems] = useState([]);

  const addItem=(text)=>{
    setItems([...items, { id: Date.now(), text, view: false }]);
  }

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleView = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, view: !item.view } : item
      )
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <h1 className="text-2xl font-bold mb-6">React Item Manager</h1>
        <ItemForm onAdd={addItem}></ItemForm>
        <ItemList items={items} onDelete={deleteItem} onToggleView={toggleView}></ItemList>
      </div>
    </>
  )
}

export default App
