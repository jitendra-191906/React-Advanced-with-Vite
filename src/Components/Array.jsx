import { useState } from "react";

export const ArrayObj = () => {
  const [items, setitem] = useState([
    {
      id: 1,
      text: "Heelo",
      done: false,
    },

    {
      id: 2,
      text: "World",
      done: false,
    },
  ]);
  const handleDelete = (id) => {
    setitem(items.filter((item) => item.id != id));
  };

  const update = () => {};

  const addItem = () => {
    const newitem = {
      id: 3,
      text: "jitu",
      done: false,
    };
    //     setitem([...items, newitem]);
    setitem(items.concat(newitem));
  };

  return (
    <>
      <div>
        <ul>
          {items.map((item) => {
            return (
              <>
                <li key={item.id}>
                  {" "}
                  {item.text}
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </li>
              </>
            );
          })}
        </ul>
        <button onClick={addItem}>ADD items</button>
      </div>
    </>
  );
};
