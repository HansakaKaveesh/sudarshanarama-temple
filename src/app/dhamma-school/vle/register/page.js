"use client";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ username: "", password: "", role: "student" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost/backend/api/register.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) alert("Registered!");
        else alert(data.error || "Registration failed");
      });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-bold">Register</h2>
      <input name="username" placeholder="Username" onChange={handleChange} className="border p-2 w-full" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 w-full" />
      <select name="role" onChange={handleChange} className="border p-2 w-full">
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
    </form>
  );
}