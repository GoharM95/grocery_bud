import React, { useState } from "react";
import "./List.css";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className="container">
            <p>{title}</p>
            <div>
              <button onClick={() => editItem(id)}>edit</button>
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
