function TeamCard({ team }) {
  return (
    <div className="team-card">
      <img className="team-logo" src={team.logo} alt={`${team.name} logo`} />

      <h3 className="team-name">{team.name}</h3>
      <p className="team-league">
        <strong>League:</strong> {team.league}
      </p>
    </div>
  );
}

export default TeamCard;
