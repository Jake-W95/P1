// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

import Form from "../../components/Form";
import "./mailing.css";

function Mailing() {
  // const [ref, inView] = useInView({
  //   threshold: 0.1,
  //   triggerOnce: true,
  // });

  // const variants = {
  //   hidden: { y: "5vh", opacity: 0 },
  //   visible: { y: 0, opacity: 1 },
  // };

  return (
    <section className="contact">
      <h1 className="page-title">Get in touch</h1>
      <div className="contactWrap container-fluid">
        <div className="row">
          <div className="contact-form-wrap col-12 col-lg-6">
            <p className="contact-text">
              Get in touch with us and join the conversation about all things F1! Use the form below to reach out to our
              team of experts with your questions, comments, or feedback. We're always happy to hear from fellow F1
              enthusiasts and look forward to connecting with you.
            </p>
            <Form />
          </div>
          <div className="contact-image-wrap col-12 col-lg-6">
            <img className="contact-img" src="./images/pitstop.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mailing;
