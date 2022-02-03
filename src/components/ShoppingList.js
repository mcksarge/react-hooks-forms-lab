import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem, setSearchedItem] = useState("");
  


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleFormSubmit(event) {

    setSearchedItem(event.target.value)
    console.log("tested")
  }

  //Filters by category or search bar
  const itemsSearched = items.filter((item) => {
    if (searchedItem !== "") {
      return (item.name.toLowerCase().includes(searchedItem.toLowerCase()))
    } else if (selectedCategory !== "All"){
      return (item.category === selectedCategory)
    } else {
      return true
    };
  })



  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} items={items}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleFormSubmit} search={searchedItem}/>
      <ul className="Items">
        {itemsSearched.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
