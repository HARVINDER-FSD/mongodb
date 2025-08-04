import { useEffect, useState } from "react";
import StudentForm from "../components/studentForm";
import StudentList from "../components/studentList";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./../studentService";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const loadStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleSubmit = async (data) => {
    if (editingStudent) {
      await updateStudent(editingStudent._id, data);
      setEditingStudent(null);
    } else {
      await addStudent(data);
    }
    loadStudents();
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <StudentForm editingStudent={editingStudent} onSubmit={handleSubmit} />
      <StudentList
        students={students}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Home;
