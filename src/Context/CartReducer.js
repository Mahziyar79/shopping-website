const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return { ...state, cart: updatedCart };

    case "ADD_PRODUCT": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
      return { ...state, cart: updatedCart };
    }

    case "DECREASE_PRODUCT": {
      let updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      if (updatedItem.quantity > 1) {
        updatedItem.quantity--;
        updatedCart[updatedItemIndex] = updatedItem;
      } else {
        const filterdItems = updatedCart.filter((item) => item.id !== action.payload.id);
        return { ...state, cart: filterdItems };
      }
      return { ...state, cart: updatedCart };

    }

    case "TOTAL_PRICE": {
      const updatedCart = [...state.cart];
      const reducer = (accumulator, curr) => accumulator + (curr.offPrice * curr.quantity);
      const totalCartPrice = updatedCart.reduce(reducer,0);
      return {...state,total:totalCartPrice}
    }

    default:
      return state;
  }
};

export default cartReducer;
