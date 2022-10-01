import React from "react";
import Form from "./Form";
export default function NewForm() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinedNewsLetter: false,
  });

  function handleChange(event) {
    const { name, type, checked, value } = event.target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: type === "checkbox" ? checked : value };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (form.password === form.confirmPassword) {
      console.log("successfully signed up");
    } else {
      console.log("passwords do not match");
    }
    if (form.joinedNewsLetter) {
      console.log("thanks for signing up for our newsletter");
    }
  }
  console.log(form);
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h5>Email</h5>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          onChange={handleChange}
          value={form.email}
          name="email"
        />
        <h5>Password</h5>
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          onChange={handleChange}
          value={form.password}
          name="password"
        />
        <h5>Confirm Password</h5>
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          onChange={handleChange}
          value={form.confirmPassword}
          name="confirmPassword"
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinedNewsLetter"
            onChange={handleChange}
            checked={form.joinedNewsLetter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
