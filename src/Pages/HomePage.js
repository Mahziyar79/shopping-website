import Layout from "../Layout/Layout";
import * as data from "../data";
import { useCartActions } from "../Context/CartProvider";

const HomePage = () => {
  
  const dispatch = useCartActions();


  const addProductHandler = (product) => {
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
                    add to cart
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
