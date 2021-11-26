import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart, useCartActions } from "../Context/CartProvider";
import Layout from "../Layout/Layout";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  useEffect(() => {
    dispatch({ type: "TOTAL_PRICE" });
  }, []);

  const increaseProductHandler = (item) => {
    dispatch({ type: "ADD_PRODUCT", payload: item });
    dispatch({ type: "TOTAL_PRICE" });
  };
  const decreaseProductHandler = (item) => {
    dispatch({ type: "DECREASE_PRODUCT", payload: item });
    dispatch({ type: "TOTAL_PRICE" });
  };

  const originalPrice = () => {
    return cart.reduce((acc,curr) => acc + (curr.quantity * curr.price),0)
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
                <div className="cart-price">
                  {item.offPrice * item.quantity} $
                </div>
                <div className="cart-changes">
                  <button
                    onClick={() => {
                      decreaseProductHandler(item);
                    }}
                  >
                    {item.quantity === 1 ? "Remove" : "Decrese"}
                  </button>
                  <button>{item.quantity}</button>
                  <button
                    onClick={() => {
                      increaseProductHandler(item);
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
          <h2 className='summery-heading'>Cart Summery</h2>
          <section className="summery-sec">
            <div>
              <p>Original Cart Total</p>
              <p>{originalPrice()} $</p>
            </div>
            <div>
              <p>Cart Discount</p>
              <p>{originalPrice() - total} $</p>
            </div>
            <hr />
            <div>
              <p>Net Price</p>
              <p>{total} $</p>
            </div>
          </section>
          <Link to='/checkout'>
          <button className='checkout-btn'>Go to Checkout</button>
          </Link>
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
