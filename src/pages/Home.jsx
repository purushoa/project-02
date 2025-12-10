import FavoriteTeamSelector from "../components/FavoriteTeamSelector.jsx";
import heroImg from "../assets/home-hero.jpeg";

const TEAMS = [
  { id: 1, name: "FC Barcelona" },
  { id: 2, name: "Real Madrid" },
  { id: 3, name: "Manchester City" },
  { id: 4, name: "Liverpool" },
];

function Home() {
  return (
    <section className="home-page">
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-kicker">STATEMENT</p>
          <h2 className="hero-title">
            GAME OVER FOR LA LIGA&apos;S MIAMI MATCH – SERIE A MUST BE NEXT
          </h2>

          <p className="hero-body">
            La Liga&apos;s tired idea to export a game to Miami has once again
            collapsed: Villarreal vs FC Barcelona will be played where it
            belongs – in Villarreal. Common sense and the rules of the game have
            prevailed. This is a victory for European football and everyone who
            believes the game belongs at the heart of our communities.
          </p>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Football supporters in stadium" />
          <div className="hero-hashtag">#KEEPFOOTBALLHOME</div>
        </div>
      </section>

      {/* MAIN INFO SECTION */}
      <section className="home-info">
        <h3>Project – Phase 2</h3>

        <p>
          Welcome to the Ultimate Football Fan Zone! <br /><br />
          Where passion meets the pitch! Stay connected with everything football —
          from breaking news and transfer updates to match highlights, player
          stats, fan debates, and unforgettable moments from around the world.
          Whether you live for the roar of the crowd, the thrill of last-minute
          goals, or the stories behind your favorite clubs and players, this is
          your home.
          <br /><br />
          Join the community. Celebrate the game. Live football every day.
        </p>
      </section>

      {/* FAVORITE TEAM SELECTOR */}
      <section className="home-favorite">
        <FavoriteTeamSelector teams={TEAMS} />
      </section>

    </section>
  );
}

export default Home;
