import { useState, useEffect } from "react";
import "./standings.css";
import TeamStandings from "./TeamStandings";

function Standings() {
  const [standings, setStandings] = useState([]);
  const [driverImageErrors, setDriverImageErrors] = useState([]);
  const [driverConstructorErrors, setDriverConstructorErrors] = useState([]);
  const [showTeamRanking, setShowTeamRanking] = useState(false);
  const [showHeading, setShowHeading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // RUN THE FUNCTION TO GET THE DRIVER STANDINGS DATA FOR THE SELECTED YEAR
  useEffect(() => {
    const fetchDriverStandings = async () => {
      const response = await fetch(
        //WAIT FOR THE RESPONSE
        `https://ergast.com/api/f1/${selectedYear}/driverStandings.json`
      );
      const data = await response.json();
      setStandings(
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      );
    };

    fetchDriverStandings();
  }, [selectedYear]);

  // IF NO DRIVER IMAGE JUST DISPLAY DRIVER NAME
  const handleImageError = (driver) => {
    setDriverImageErrors((prevState) => [...prevState, driver.Driver.driverId]);
  };

  const handleTeamImageError = (driver) => {
    setDriverConstructorErrors((prevState) => [
      ...prevState,
      driver.Constructors[0].constructorId,
    ]);
  };

  const handleDisplayTeamRanking = () => {
    setShowTeamRanking(true);
    setShowHeading(false);
  };

  const handleDisplayDriverStandings = () => {
    setShowTeamRanking(false);
    setShowHeading(true);
  };

  const handleSelectYear = (event) => {
    setSelectedYear(event.target.value);
    console.log(selectedYear);
  };

  // RENDERING DATA TO THE DOM
  return (
    <div>
      <div>
        {showTeamRanking ? (
          <button onClick={handleDisplayDriverStandings}>
            Driver Standings
          </button>
        ) : (
          <button onClick={handleDisplayTeamRanking}>Team Ranking</button>
        )}

        {showHeading && (
          <>
            <h1>F1 Driver Standings</h1>
            <div>
              <label htmlFor="yearSelect">Select year: </label>
              <select value={selectedYear} onChange={handleSelectYear}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
              </select>
            </div>
          </>
        )}
      </div>
      {showTeamRanking && (
        <div>
          <TeamStandings
            selectedYear={selectedYear}
            showTeamRanking={showTeamRanking}
            handleDisplayDriverStandings={handleDisplayDriverStandings}
            driverConstructorErrors={setDriverConstructorErrors}
          />
        </div>
      )}
      {!showTeamRanking && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Driver</th>
                <th>Team</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((driver) => (
                <tr key={driver.position}>
                  <td>{driver.position}</td>
                  <td>
                    <img
                      src={`images/drivers/${driver.Driver.driverId}.svg`}
                      alt={driver.Driver.driverId}
                      className="driver-svg"
                      style={{
                        display: driverImageErrors.includes(
                          driver.Driver.driverId
                        )
                          ? "none"
                          : "block",
                      }}
                      onError={() => handleImageError(driver)}
                    />
                    {driver.Driver.givenName} {driver.Driver.familyName}
                  </td>
                  <td>
                    {driver.Constructors[0] &&
                      driver.Constructors[0].constructorId && (
                        <img
                          src={`images/teams/${driver.Constructors[0].constructorId}.svg`}
                          alt={driver.Constructors[0].constructorId}
                          className="team-svg"
                          style={{
                            display: driverConstructorErrors.includes(
                              driver.Constructors[0].constructorId
                            )
                              ? "none"
                              : "block",
                          }}
                          onError={() => handleTeamImageError(driver)}
                        />
                      )}

                    {driver.Constructors[0]?.name}
                  </td>
                  <td>{driver.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Standings;
