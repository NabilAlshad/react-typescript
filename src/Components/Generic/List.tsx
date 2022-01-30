import React from "react";
interface ListProps<T> {
  items: T[];
  onClick: (value: T) => void;
}
const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) => {
  // console.log(items.)
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id}
          </div>
        );
      })}
    </div>
  );
};

export default List;
