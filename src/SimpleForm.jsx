import React, { useState } from 'react'

function SimpleForm() {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [formDataArr, setFormData] = useState([]);

const SaveFormData=(e)=>{
    e.preventDefault();
    setFormData([...formDataArr,{name,email}])
    setEmail("");
    setName("");
};
  return (
    <div>        
        <div>
            <label>Name:</label>
            <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>        
        </div>
        <div>
            <label>Email:</label>
            <input type='text' value={email} onChange={e=>setEmail(e.target.value)}></input>        
        </div>
        <button onClick={SaveFormData}>Save</button>         
        
        <h3>Form Array Data:</h3>      
        <ul>
        {formDataArr.map((data, idx) => (
          <li key={idx}>
            Name: {data.name}, Email: {data.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SimpleForm
