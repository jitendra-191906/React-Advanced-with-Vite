import React from "react";
import { useReducer } from "react";
const initial = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
};
const reducer = (state, action) => {
  //retuen new state based on the action
  switch (action.type) {
    case "add_item": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      let updatedItem;
      if (existingItemIndex >= 0) {
        updatedItem = [...state.items];
        updatedItem[existingItemIndex] = {
          ...updatedItem[existingItemIndex],
          quantity: updatedItem[existingItemIndex].quantity + 1,
        };
      } else {
        updatedItem = [
          ...state.items,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }
      return {
        ...state,
        items: updatedItem,
        totalAmount: updatedItem.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),
        totalItems: updatedItem.reduce(
          (total, item) => total + item.quantity,
          0,
        ),
      };
    }
    case "remove_item": {
      const filterItems = state.items.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        items: filterItems,
        totalAmount: filterItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),
        totalItems: filterItems.reduce(
          (total, item) => total + item.quantity,
          0,
        ),
      };
    }
    case "update_item": {
      if (action.payload.quantity === 0) {
        reducer(state, {
          type: "remove_item",
          payload: { id: action.payload.id },
        });
      }
      const updatedQuantityItem = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );

      return {
        ...state,
        items: updatedQuantityItem,
        totalAmount: updatedQuantityItem.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),
        totalItems: updatedQuantityItem.reduce(
          (total, item) => total + item.quantity,
          0,
        ),
      };
    }

    case "clear":
      return initial;
    default:
      return state;
  }
};
const products = [
  {
    id: 1,
    name: "shirt",
    price: 29.23,
  },
  {
    id: 2,
    name: "Jeans",
    price: 25.23,
  },
  {
    id: 3,
    name: "lower",
    price: 12.23,
  },
];

export const ShoppingCart = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <>
      <h3>Product List</h3>
      {products.map((product) => (
        <div key={product.id}>
          <h3>
            {product.name} - ${product.price}
          </h3>
          <button
            onClick={() =>
              dispatch({
                type: "add_item",
                payload: product,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
      <div
        style={{
          backgroundColor: "blue",
          padding: 20,
          gap: 20,
        }}
      >
        <h3>Your Shopping card</h3>
        {state.items.length === 0 ? (
          <p>your cart is empty</p>
        ) : (
          <div>
            {state.items.map((item) => (
              <div key={item.id}>
                <p>
                  {item.name}-${item.price} * {item.quantity}
                </p>
                <button
                  onClick={() =>
                    dispatch({
                      type: "update_item",
                      payload: { id: item.id, quantity: item.quantity - 1 },
                    })
                  }
                >
                  -
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: "update_item",
                      payload: { id: item.id, quantity: item.quantity + 1 },
                    })
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    dispatch({
                      type: "remove_item",
                      payload: { id: item.id },
                    })
                  }
                >
                  remove
                </button>
              </div>
            ))}
          </div>
        )}

        <h3>Total item : {state.totalItems}</h3>
        <h3>Total amount : {state.totalAmount.toFixed(2)}</h3>
        {state.items.length > 0 && (
          <button
            onClick={() =>
              dispatch({
                type: "clear",
              })
            }
          >
            clear cart
          </button>
        )}
      </div>
    </>
  );
};
