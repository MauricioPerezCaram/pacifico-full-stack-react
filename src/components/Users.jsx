import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users")
      .then((res) => {
        console.log(res.data.response);
        // setUsers(res.data.response.docs);
        setUsers(res.data.response);
        setPrev(res.data.response.prevPage);
        setNext(res.data.response.nextPage);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <div className="card-container">
        {users.map((each) => (
          <div className="card-product">
            <h2>
              {each.name} {each.lastname}
            </h2>
            <img src={each.photo} alt={each.name} />
            <h3>{each.email}</h3>
            <h4>Role: {each.role}</h4>
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

export default Users;
