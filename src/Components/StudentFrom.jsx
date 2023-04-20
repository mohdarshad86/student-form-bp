import React, { useState } from "react";
import './style.css'
function StudentForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("male");
    const [email, setEmail] = useState("");
    const [students, setStudents] = useState([]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newStudent = { name, age, gender, email };
        setStudents([...students, newStudent]);
        setName("");
        setAge("");
        setGender("male");
        setEmail("");
    };

    return (
        <div className="container">
            <h2>Student Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />
                <label>
                    Age:
                    <input type="text" value={age} onChange={handleAgeChange} />
                </label>
                <br />
                <label>
                    Gender:
                    <select value={gender} onChange={handleGenderChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <br />
                <label>
                    Email:
                    <input type="text" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <h2>Student List</h2>
            {students.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.gender}</td>
                                <td>{student.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default StudentForm;
