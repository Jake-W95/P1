import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const TrumpCard = ( {player, card}   ) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });


  console.log(card)
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => setIsFlipped(!isFlipped);

  const variants = {
    hidden: { x: player === "user" ? "-50vw" : "50vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  // Dumb data
  // const experience = 310;
  // const teamRanking = 3;
  // const wins = 103;
  // const podiums = 191;
  // const championships = 7;

  const driverRating = (function () {
    const winPercentage = (wins / experience) * 100;
    const podiumPercentage = (podiums / experience) * 100;
    const calcExperience = 0.1 * experience;
    const calcTeamRanking = 5 * (10 - teamRanking);
    const calcWins = 0.8 * winPercentage;
    const calcPodiums = 0.4 * podiumPercentage;
    const calcChampionships = 0.8 * championships;

    const rating = calcExperience + calcTeamRanking + calcWins + calcPodiums + calcChampionships;

    const cappedRating = Math.min(100, rating);

    // console.log(rating);
    // console.log(cappedRating);

    return Math.round(cappedRating);
  })();

  // console.log(isFlipped);

  return (
    <motion.div
      className="card-container"
      layout
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <motion.div className="front" onClick={flipCard} layout animate={{ rotateY: isFlipped ? 180 : 0 }}>
        <div className="driver-wrap">
          <img className="team-logo" src="../../../images/teams/mercedes.svg" alt="Team" />
          <img className="driver-image" src="../../images/drivers/lewis.png" alt="Driver" />
          <img className="card-brand" src="../../images/logo2.svg" alt="Team" />

          <div className="name-banner">
            <span className="name">{card.name}</span>
          </div>
        </div>
        <div className="stats-container">
          <div className="stat-wrap">
            <p className="stat-title">Experience</p>
            <p className="data experience">{experience}</p>
          </div>
          <div className="divider"></div>
          <div className="stat-wrap">
            <p className="stat-title">Team Ranking</p>
            <p className="data team">{teamRanking}</p>
          </div>
          <div className="divider"></div>
          <div className="stat-wrap">
            <p className="stat-title">Wins:</p>
            <p className="data wins">{wins}</p>
          </div>
          <div className="divider"></div>
          <div className="stat-wrap">
            <p className="stat-title">Podiums</p>
            <p className="data podiums">{podiums}</p>
          </div>
          <div className="divider"></div>
          <div className="stat-wrap">
            <p className="stat-title">Championships</p>
            <p className="data championships">{championships}</p>
          </div>
          <div className="divider"></div>
          <div className="stat-wrap">
            <p className="stat-title">Rating</p>
            <p className="data score">{driverRating}</p>
          </div>
        </div>
      </motion.div>
      <motion.div className="back" onClick={flipCard} layout animate={{ rotateY: isFlipped ? 0 : -180 }}></motion.div>
    </motion.div>
  );
};

export default TrumpCard;
