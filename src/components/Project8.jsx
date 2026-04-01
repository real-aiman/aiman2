import React, { useState } from "react";
import "../App.css";

function Project8() {
  const [role, setRole] = useState("Student");

  return (
    <div className="radio-container">
      <label className="radio-option">
        <input
          type="radio"
          name="role"
          value="Student"
          checked={role === "Student"}
          onChange={() => setRole("Student")}
        />
        <span className="custom-radio"></span>
        Student
      </label>

      <label className="radio-option">
        <input
          type="radio"
          name="role"
          value="Teacher"
          checked={role === "Teacher"}
          onChange={() => setRole("Teacher")}
        />
        <span className="custom-radio"></span>
        Teacher
      </label>
    </div>
  );
}

export default Project8;