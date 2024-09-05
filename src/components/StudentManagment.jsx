import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../features/todo/todoSlice";
// import AddTodo from "../features/todo/todoSlice";

function StudentManagment() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();
  const students = useSelector(state=>state.students)

  const onsubmitHandler = (e) => {
    e.preventDefault();
    const studentData = {
      name: name,
      age: age,
    };
    dispatch(addStudent(studentData));

    console.log("Student Data:", studentData);
  };

  return (
    <div>
      <Container>
        <Form onSubmit={onsubmitHandler}>
          <h1>Add a Student</h1>
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Student Name"
          />
          {/* <Form.Label>Student Age</Form.Label>
          <Form.Control
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter Student Age"
          /> */}
          <button type="submit">Register</button>
        </Form>
      </Container>
      <h1>List of Student</h1>
      {students.map((student)=>(
        <li key={student.id}>{student.name} {student.age}</li>
      ))}
    </div>
  );
}

export default StudentManagment;
