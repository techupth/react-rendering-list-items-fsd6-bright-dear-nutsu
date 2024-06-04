// import './App.css';

import movies from './data/movies.jsx';

function App() {
  return (
    // <div className="App">
    <div className="flex justify-center min-h-screen ">
      {/* <section className="movie-list-section"> */}
      <section className="flex flex-col gap-12 my-12 ">
        <h1 className="text-center text-4xl font-bold">Movie List Section</h1>
        {/* Render Movie Lists Here */}
        {movies.map((movie, index) => {
          return (
            <article
              key={index}
              className="w-[400px] p-3 border rounded-xl flex gap-3 font-semibold text-xl drop-shadow-3xl"
            >
              {/* drop-shadow-[0_4px_40px_rgba(145,124,124,0.25)] */}
              <div>
                <img
                  className="w-[102px] h-[100px] rounded-lg"
                  src={movie.image}
                  alt="image-article"
                />
              </div>
              <div>
                <h2>Title: {movie.title}</h2>
                <h3>Year: {movie.year}</h3>
                <h3>Runtime: {movie.runtime}</h3>
                <div className="flex gap-3">
                  <h3 className="">Genres: </h3>
                  <div className="flex flex-wrap gap-3">
                    {movie.genres.map((genre, index) => {
                      return (
                        <button
                          key={index}
                          className="p-2 bg-red-300 rounded-2xl"
                        >
                          {genre}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <h4>IMDB Rating: {movie.imdbRating}</h4>
                <h4>IMDB Votes: {movie.imdbVotes}</h4>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default App;
