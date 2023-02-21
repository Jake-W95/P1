import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // ALL FIELDS NEED TO BE FILLED
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message || !subject) {
      setError("Please fill in all fields.");
      return;
    }
    setError(null);
    setSuccess(false);

    // DEMOSTRATING DATA THAT CAN BE SENT TO A SERVER AND SEND BACK THE DATA ENTERED, IN THIS CASE A DATA OBJECT LOGGED TO THE CONSOLE
    const data = { name, email, message, subject };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
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
        console.error("There was an error!", error);
        setError(error.message);
      });
  };

  // CLEAR THE FORM AND REMOVE THE ERROR
  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
    setError(null);
    setSuccess(false);
  };
  return (
    <motion.form
      action=""
      ref={ref}
      className="mailing-form"
      initial={{ x: "-10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onSubmit={handleSubmit}
    >
      <div className="col-12 col-md-6 form-group" style={{ display: "inline-block" }}>
        <input
          type="text"
          className="form-control"
          value={name}
          id="name"
          name="name"
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="col-12 col-md-6 form-group" style={{ display: "inline-block" }}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="col-12 form-group">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          id="subject"
          name="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="col-12 form-group">
        <textarea
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          id="message"
          rows="5"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="col-12 form-group form-btns">
        <button type="submit" className="form-submit">
          {success ? "Message sent" : error ? "Error" : "Send"}
        </button>

        <button type="button" className="form-clear" onClick={clearForm}>
          Clear
        </button>
      </div>
    </motion.form>
  );
};

export default Form;
