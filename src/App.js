import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movies from "./movie.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {movies.map((e, i) => {
          return <Movie key={i} title={e.Title} year={e.Year} img={e.Poster} />;
        })}
      </div>
    </div>
  );
}

export default App;
