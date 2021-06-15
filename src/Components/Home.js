import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="HomeHeader">
        <h1>Izer Onadim</h1>
        <p>I am a computer science student and software engineer.</p>
        <a
          className="GitHubLink"
          href="https://github.com/IzerOnadim"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my GitHub
        </a>
      </header>
    </div>
  );
}

export default Home;
