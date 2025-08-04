import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddPizza() {
  const [form, setForm] = useState({ name: '', price: '', size: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9000/add', form).then(() => {
      alert('Pizza Added!');
      navigate('/menu'); 
    });
  };

  return (
    <div>
      <h2>Add Pizza</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <input placeholder="Size" value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} />
        <button type="submit">Add Pizza</button>
      </form>
    </div>
  );
}

export default AddPizza;