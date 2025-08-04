import React from "react";

const StudentList = ({ students, onDelete, onEdit }) => {
  return (
    <div className="student-list">
      <h3>Students</h3>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} - {student.email}
            <button onClick={() => onEdit(student)}>Edit</button>
            <button onClick={() => onDelete(student._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
