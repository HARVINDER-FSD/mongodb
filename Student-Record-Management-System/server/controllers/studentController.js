const Student = require('../models/studentModel');

// CREATE student
exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const data = await student.save();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET all students
exports.getStudents = async (req, res) => {
  try {
    const data = await Student.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE student
exports.updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE student
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.send('Deleted');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

