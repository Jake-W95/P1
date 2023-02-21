import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const TrumpCard = ({ player, card, getUserAttVal, getUserAttName, userAttName, /*getAIAttVal,*/ nextRound, flipAICard, AIFlip}) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  
  // const [isFlipped, setIsFlipped] = useState(false);

  // const flipCard = () => setIsFlipped(!isFlipped);


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
  //////////////////////////////////////////////////////Rating Algorithm
  // const driverRating = (function () {
  //   const winPercentage = (wins / experience) * 100;
  //   const podiumPercentage = (podiums / experience) * 100;
  //   const calcExperience = 0.1 * experience;
  //   const calcTeamRanking = 5 * (10 - teamRanking);
  //   const calcWins = 0.8 * winPercentage;
  //   const calcPodiums = 0.4 * podiumPercentage;
  //   const calcChampionships = 0.8 * championships;

  //   const rating = calcExperience + calcTeamRanking + calcWins + calcPodiums + calcChampionships;

  //   const cappedRating = Math.min(100, rating);

  //   // console.log(rating);
  //   // console.log(cappedRating);

  //   return Math.round(cappedRating);
  // })();

  // console.log(isFlipped);



  // Function logs experience value
  // const getExpVal = () => { console.log(card.experience) }

  // To be re-declared as attribute is chosen
  


const EXP = card.experience;
const TRK = card.team_ranking;
const WIN = card.wins;
const POD = card.podiums;
const RTG = card.rating;
// const CHA = card.championships;


// if(userAttName === 'Experience'){ getAIAttVal(EXP)};
// if(userAttName === 'Team Ranking'){ getAIAttVal(TRK)};
// if(userAttName === '# of Wins'){ getAIAttVal(WIN)};
// if(userAttName === 'Podiums'){ getAIAttVal(POD)};
// if(userAttName === 'Rating'){ getAIAttVal(RTG)};



console.log({AIFlip})

  return (
    <motion.div
      className="card-container"
      layout
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onClick={flipAICard}
    >
      <motion.div className="front" layout animate={{ rotateY: AIFlip ? 180 : 0 }}>
        
        <div className="driver-wrap">
          <img className="team-logo" src={card.team_image} alt="Team" />
          <img className="driver-image" src={card.driver_image} alt="Driver" />
          <img className="card-brand" src="../../images/logo2.svg" alt="Team" />

          <div className="name-banner">
            <span className="name " >{card.name}</span>
          </div>
        </div>
        <div className="stats-container" >
          <div className="stat-wrap" onClick={() => {getUserAttVal(EXP); getUserAttName('Experience'); nextRound(); }}>
            <p className="stat-title">Experience</p>
            <p className="data experience" >{card.experience}</p>
          </div>
          <div className="divider"></div>
          <div className="stat-wrap" onClick={() => {getUserAttVal(TRK); getUserAttName('Team Ranking'); nextRound() }}>
            <p className="stat-title">Team Ranking</p>
            <p className="data team">{card.team_ranking}</p>
          </div>
          <div className="divider"></div>
          <div className="stat-wrap" onClick={() => {getUserAttVal(WIN); getUserAttName('# of Wins'); nextRound()}}/*onClick={flipCard}*/>
            <p className="stat-title">Wins:</p>
            <p className="data wins">{card.wins}</p>
          </div>
          <div className="divider"></div>
          <div className="stat-wrap" onClick={() => {getUserAttVal(POD); getUserAttName('Podiums'); nextRound()}}/*onClick={flipCard}*/>
            <p className="stat-title">Podiums</p>
            <p className="data podiums">{card.podiums}</p>
          </div>
          <div className="divider"></div>
          <div className="stat-wrap" onClick={() => {getUserAttVal(RTG); getUserAttName('Rating'); nextRound()}}/*onClick={flipCard}*/>
            <p className="stat-title">Rating</p>
            <p className="data score">{card.rating}</p>
          </div>
          

        </div>
      </motion.div>
      <motion.div className="back" layout animate={{ rotateY: AIFlip ? 0 : -180 }}></motion.div>
    </motion.div>
  );
};

export default TrumpCard;
