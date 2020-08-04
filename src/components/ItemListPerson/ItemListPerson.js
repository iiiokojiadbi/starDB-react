import React from 'react';

function ItemListPerson({ name, birthYear, onClickItem, isSelected }) {
  return (
    <li
      className={`choose__list-item ${
        isSelected && 'choose__list-item_active'
      }`}
      onClick={onClickItem}
    >
      <span className="choose__text">{name}</span>
      <span className="choose__text">Birth Year: {birthYear}</span>
    </li>
  );
}

export default ItemListPerson;
