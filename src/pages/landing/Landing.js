import Jumbo from "../../components/Jumbo";
import Featured from "../../components/Featured";
import Articles from "../../components/Articles";

import Footer from "../../components/Footer";
import "./landing.css";

const Landing = () => {
  return (
    <>
      <section className="jumbo-container row">
        <Jumbo />
      </section>
      <main className="landing-container container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6 play-wrap ">
            <Featured />
          </div>
          <div className="col-12 col-lg-6">
            <Articles />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Landing;
