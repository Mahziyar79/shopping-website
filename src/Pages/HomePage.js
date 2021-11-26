import Layout from "../Layout/Layout";
import * as data from "../data";
import { useCart, useCartActions } from "../Context/CartProvider";
import { toast } from "react-toastify";

const HomePage = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();

  const addProductHandler = (product) => {
    toast.success(`${product.name} added to Cart`)
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Layout>
      <main className="products-main">
        <h2>Product List</h2>
        <section className="product_list">
          {data.products.map((product) => {
            return (
              <section className="product" key={product.id}>
                <div className="product-img">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-desc">
                  <p>{product.name}</p>
                  <p>{product.price} $</p>
                  <button
                    className="btn"
                    onClick={() => addProductHandler(product)}
                  >
                    {cart.find((item) => item.id === product.id)
                      ? "In Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
