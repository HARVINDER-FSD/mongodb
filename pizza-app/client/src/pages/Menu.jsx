import { useEffect, useState } from 'react';
import axios from 'axios';

function Menu() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/menu').then((res) => {
      setPizzas(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Pizza Menu</h2>
      <ul>
        {pizzas.map((pizza, index) => (
          <li key={index}>
            {pizza.name} - ₹{pizza.price} [{pizza.size}]
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;