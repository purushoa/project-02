import { useState } from "react";

export default function FavoriteTeamSelector({ teams }) {
  const [favoriteTeamId, setFavoriteTeamId] = useState("");

  const selectedTeam = teams.find((team) => team.id === Number(favoriteTeamId));

  return (
    <section>
      <h3>Select Your Favourite Team</h3>
      <p>Choose from the list of popular clubs:</p>

      <select
        value={favoriteTeamId}
        onChange={(e) => setFavoriteTeamId(e.target.value)}
      >
        <option value="">-- Choose a team --</option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>

      {selectedTeam && (
        <p style={{ marginTop: "1rem" }}>
          You selected <strong>{selectedTeam.name}</strong> as your favourite
          team! ⚽
        </p>
      )}
    </section>
  );
}
