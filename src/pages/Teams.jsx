import barcaLogo from "../assets/teams/barca.jpeg";
import madridLogo from "../assets/teams/real.jpeg";
import cityLogo from "../assets/teams/mancity.jpeg";
import liverpoolLogo from "../assets/teams/liverpool.jpeg";

const TEAMS = [
  {
    id: 1,
    name: "FC Barcelona",
    league: "La Liga",
    logo: barcaLogo,
  },
  {
    id: 2,
    name: "Real Madrid",
    league: "La Liga",
    logo: madridLogo,
  },
  {
    id: 3,
    name: "Manchester City",
    league: "Premier League",
    logo: cityLogo,
  },
  {
    id: 4,
    name: "Liverpool",
    league: "Premier League",
    logo: liverpoolLogo,
  },
];

function Teams() {
  return (
    <section className="teams-page">
      <h2>Teams</h2>

      <div className="teams-grid">
        {TEAMS.map((team) => (
          <div key={team.id} className="team-card">
            <img src={team.logo} alt={team.name} className="team-logo" />
            <h3 className="team-name">{team.name}</h3>
            <p className="team-league">{team.league}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Teams;
