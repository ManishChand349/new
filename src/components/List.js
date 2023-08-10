import React from 'react';

const List = ({items}) => {
  return (
    <ul>
      {items.map((items, index) => (
        <li key={index}>{items}</li>
      ))}
    </ul>
  );
};

export default List;
