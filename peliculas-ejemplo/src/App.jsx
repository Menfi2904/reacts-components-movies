import Header from "./componentes/Header";
import { MovieList } from "./componentes/MovieList";

const latestMovies = [
  { name: "Avatar 2" },
  { name: "Matrix 2" },
  { name: "Thor" },
];

const childrenMovies = [
  { name: "Minions" },
  { name: "Alice In Wonderland" },
  { name: "Harry Potter" },
];

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList list={latestMovies} />
      <MovieList list={childrenMovies} />
    </div>
  );
}

export default App;
