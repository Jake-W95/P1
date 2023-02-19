import React, { useState } from "react";
import "./mailing.css";

// STATE VARIABLES DECLARED
function Mailing() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // ALL FIELDS NEED TO BE FILLED
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    // DEMOSTRATING DATA THAT CAN BE SENT TO A SERVER AND SEND BACK THE DATA ENTERED, IN THIS CASE A DATA OBJECT LOGGED TO THE CONSOLE
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

  // CLEAR THE FORM AND REMOVE THE ERROR
  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setError(null);
    setSuccess(false);
  };

  // RENDER TO THE CONSOLE
  return (
    <div className="form">
      <h1>Contact</h1>
      <p className="mail-text">
        Please fill out the form below to get in touch with us.
      </p>
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

        <button type="button" className="clearform" onClick={clearForm}>
          Clear form
        </button>
      </form>
    </div>
  );
}

export default Mailing;
