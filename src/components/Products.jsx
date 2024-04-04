import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => setProducts(res.data.response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card-container">
      {products.map((each) => (
        <div className="card-product">
          <h2>{each.title}</h2>
          <img src={each.photo} alt={each.title} />
          <h3>${each.price}</h3>
          <h4>Stock: {each.stock}</h4>
        </div>
      ))}
    </div>
  );
}

export default Products;
