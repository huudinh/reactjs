import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createContact, removeContact, updateContact } from "./actions/contact";
import './App.css';

function App() {
  const contacts = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    name && dispatch(createContact(name));
    setName('');
  }

  const handleEdit = (index) => {
    let content = prompt('Nội dung...');
    content && dispatch(updateContact(index, content));
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const listView = (data, index) => {
    return (
      <li className="list">
          <div key={index} className="content">
            {data}
          </div>
          <div>
            <button onClick={() => handleEdit(index) } className="btn edit">Edit</button>
            <button onClick={() => dispatch(removeContact(index))} className="btn remove">Remove</button>
          </div>
      </li> 
    )
  }

  return (
    <div className="container">
      <h3>Add Contact Form</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} className="input" value={name} /><br />
        <input type="submit" className="btn submit" value="ADD" />
      </form>
      <hr />
      {<ul className="list-group">
        {contacts.map((contact, i) => listView(contact, i))}
      </ul>}
    </div>
  );
}

export default App;