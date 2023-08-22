import products from "./products.json";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App min-w-full">
      <Cart />
      <div className="my-8 flex">
      <div className="products flex justify-center flex-wrap">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;