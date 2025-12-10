import PlayerCard from "../components/PlayerCard";

// Import images
import messi from "../assets/players/messi.jpeg";
import haaland from "../assets/players/haaland.jpg";
import debruyne from "../assets/players/debruyne.jpeg";

function Players() {
  const players = [
    {
      name: "Lionel Messi",
      position: "Forward",
      team: "Inter Miami",
      photo: messi,
    },
    {
      name: "Erling Haaland",
      position: "Forward",
      team: "Manchester City",
      photo: haaland,
    },
    {
      name: "Kevin De Bruyne",
      position: "Midfielder",
      team: "Napoli", // corrected
      photo: debruyne,
    },
  ];

  return (
    <section className="players-section">
      <h2>Players</h2>
      <div className="players-grid">
        {players.map((player) => (
          <PlayerCard
            key={player.name}
            name={player.name}
            position={player.position}
            team={player.team}
            photo={player.photo}
          />
        ))}
      </div>
    </section>
  );
}

export default Players;
