import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="music" />
        </main>
        <footer className="App-footer">
          <small>Coded by Sheronda McKee-Dollar</small> and open-sourced on{" "}
          <a href="https://github.com/SherondaMD/smd-dictionary">GitHub</a>
        </footer>
      </div>
    </div>
  );
}
