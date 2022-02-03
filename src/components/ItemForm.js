import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  })

  function handleFormChange(event) {
    const name = event.target.name

    setFormData({
      ...formData,
      [name]: event.target.value
    })
    
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category
    }

    props.onItemFormSubmit(newItem)
  }



  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormChange} value={formData.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormChange} value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
