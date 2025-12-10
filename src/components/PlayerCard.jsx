function PlayerCard({ name, position, team, photo }) {
  return (
    <div className="player-card">
      <img src={photo} alt={name} className="player-photo" />
      <h3>{name}</h3>
      <p><strong>Position:</strong> {position}</p>
      <p><strong>Team:</strong> {team}</p>
    </div>
  );
}

export default PlayerCard;
