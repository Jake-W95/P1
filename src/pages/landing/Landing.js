// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

import Jumbo from "../../components/Jumbo";
import Featured from "../../components/Featured";
import Articles from "../../components/Articles";
import Schedule from "../../components/Schedule";

import Footer from "../../components/Footer";
import "./landing.css";

const Landing = () => {
  // const [ref, inView] = useInView({
  //   threshold: 0.1,
  //   triggerOnce: true,
  // });

  // const variants = {
  //   right: { x: "10vw", opacity: 0 },
  //   visible: { x: 0, opacity: 1 },
  // };

  return (
    <>
      <section className="jumbo-container row">
        <Jumbo />
      </section>
      <main className="landing-container container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6 play-wrap">
            <Featured />
          </div>
          <div className="col-12 col-lg-6">
            <Articles />
          </div>
        </div>
        <div className="">
          <div className="">
            <Schedule />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Landing;
