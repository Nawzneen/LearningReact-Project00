import React from "react";
export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    comment: "",
    isFriendly: true,
  });
  console.log(formData);
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          valu={formData.firstName}
        />
      </form>
      <form>
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          valu={formData.lastName}
        />
      </form>
      <form>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          valu={formData.email}
        />
      </form>
      <textarea
        name={formData.comment}
        value={formData.comment}
        placeholder="type your comment here"
        onChange={handleChange}
      />
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you Friendly?</label>
    </div>
  );
}
