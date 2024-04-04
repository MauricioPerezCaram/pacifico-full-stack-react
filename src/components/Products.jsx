import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => {
        console.log(res.data.response);
        // setProducts(res.data.response.docs);
        setProducts(res.data.response);
        setPrev(res.data.response.prevPage);
        setNext(res.data.response.nextPage);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <div className="card-container">
        {products.map((each) => (
          <div className="card-product">
            <h2>{each.title}</h2>
            <img src={each.photo} alt={each.title} />
            <h4>${each.price}</h4>
            <h4>Categoria: {each.category}</h4>
            <h5>Stock: {each.stock}</h5>
          </div>
        ))}
      </div>
      <div className="botones-sig-ant">
        {prev && <button>Anterior</button>}
        {next && <button>Siguiente</button>}
      </div>
    </section>
  );
}

export default Products;
