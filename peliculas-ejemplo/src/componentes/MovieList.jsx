import { MovieCard } from "./MovieCard";

const handleCheckTime = (movieName) => {
  console.log(`check time clicked from ${movieName}`);
};

export const MovieList = (props) => {
  const { list } = props;
  return (
    <ul>
      {list.map((movie) => (
        <MovieCard name={movie.name} onCheckTimeClick={handleCheckTime} />
      ))}
    </ul>
  );
};
