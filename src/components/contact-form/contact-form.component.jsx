import "./contact-form.styles.scss";

import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="form-name" placeholder="Name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="form-email" placeholder="Email" required />
      </div>
      <div>
        <label className="form-textarea" htmlFor="message">
          Message:
        </label>
        <textarea
          id="textarea"
          placeholder="Enter your message here..."
          required
        />
      </div>
      <button className="form-btn" type="submit">
        {status}
      </button>
    </form>
  );
};

export default ContactForm;
