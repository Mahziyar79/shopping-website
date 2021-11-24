import { useEffect } from "react";
import { useCart, useCartActions } from "../Context/CartProvider";
import Layout from "../Layout/Layout";

const CartPage = () => {
  const { cart,total } = useCart();
  const dispatch = useCartActions();
    
//   if(cart.length){
//       const reducer = (accumulator, curr) => accumulator + curr.price;
//       const totalCartPrice = cart.reduce(reducer,0);
//       dispatch({type:"TOTAL_PRICE"})
//   }

useEffect(()=>{
    dispatch({type:"TOTAL_PRICE"})
},[])
const increaseProductHandler = (item) => {
    dispatch({ type: "ADD_PRODUCT", payload: item });
    dispatch({type:"TOTAL_PRICE"})
}
const decreaseProductHandler = (item) => {
    dispatch({ type: "DECREASE_PRODUCT", payload: item });
    dispatch({type:"TOTAL_PRICE"})
}


  if (!cart.length) {
    return (
      <Layout>
        <main>
          <p>The Cart is Empty</p>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="cart-container">
        <section className="cart-section">
          {cart.map((item) => {
            return (
              <div className="cartItem" key={item.id}>
                <div className="cart-img">
                  <img src={item.image} alt={item.name}></img>
                </div>
                <div className="cart-title">{item.name}</div>
                <div className="cart-price">{item.price * item.quantity} $</div>
                <div className="cart-changes">
                  <button
                    onClick={() => {
                      decreaseProductHandler(item)
                    }}
                  >
                    {item.quantity === 1 ? "Remove" : "Decrese"}
                  </button>
                  <button>{item.quantity}</button>
                  <button
                    onClick={() => {
                      increaseProductHandler(item)
                    }}
                  >
                    add
                  </button>
                </div>
              </div>
            );
          })}
        </section>
        <section className="summery-section">
          <div>Cart Summery</div>
          <div>{total}</div>
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
