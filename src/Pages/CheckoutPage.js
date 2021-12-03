import { useAuth } from "../Context/AuthProvider";
import { useCart } from "../Context/CartProvider";
import Layout from "../Layout/Layout";

const CheckoutPage = () => {
  const { cart, total } = useCart();
  const auth = useAuth();
  return (
    <Layout>
      <main className="cart-container">
        <section className="cart-section checkout-section">
          {auth ? (
            <>
              <h2>Checkout Detail</h2>
              <p>{auth.name}</p>
              <p>{auth.email}</p>
              <p>{auth.phoneNumber}</p>
            </>
          ) : (
            <p>Please login first</p>
          )}
        </section>
        <section className="summery-section summery-checkout">
          {cart &&
            cart.map((item) => (
              <div key={item.id}>
                {item.name} * {item.quantity} : {item.quantity * item.offPrice}{" "}
                $
              </div>
            ))}
          <hr />
          <div className="total-checkout">
            Total Price : <strong>{total} $</strong>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default CheckoutPage;
