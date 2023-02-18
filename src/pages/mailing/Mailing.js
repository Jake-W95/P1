import React, { useState } from "react";
import "./mailing.css";

function Mailing() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    const data = { name, email, message };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setIsLoading(false);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSuccess(true);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("There was an error!", error);
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mailing-form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {success && <p>Message sent successfully!</p>}

      <button type="submit">Send</button>
    </form>
  );
}

export default Mailing;
