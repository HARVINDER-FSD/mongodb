import { useState, useEffect } from "react";

const initialState = {
  name: "",
  age: "",
  class: "",
  email: "",
  address: "",
  phone: ""
};

const StudentForm = ({ onSubmit, editingStudent }) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(initialState).map((field) => (
        <input
          key={field}
          type={field === "age" ? "number" : "text"}
          placeholder={field}
          name={field}
          value={formData[field]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">{editingStudent ? "Update" : "Add"} Student</button>
    </form>
  );
};

export default StudentForm;
