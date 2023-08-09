import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", title: "My Book", price: 6, description: "My first book" },
  { id: "p2", title: "My Book 2", price: 7, description: "My second book" },
  { id: "p3", title: "My Book 3", price: 10, description: "My third book" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
