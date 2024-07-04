import React from "react";

const Movie = ({ title, poster_path, overview, vote_average }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="movie bg-green-500">
      {poster_path && <img src={posterUrl} alt={`${title} Poster`} />}
      <div className="movie-info font-bold">
        <h3 className="">{`${title}...`.split("").slice(0,20).join("")}</h3>
        <span>{vote_average.toFixed(1)}</span>
      </div>
      <div className="movie-over bg-green-100 text-green-700">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;

// import React from "react";

// const Movie = ({
//   title,
//   poster_path,
//   overview,
//   vote_average,
// }) => {
//   return (
//     <div className="movie">
//       <img src={`https://image.tmdb.org/t/p/w500`+ poster_path} alt={title} />
//       <div className="movie-info">
//         <h3>{title}</h3>
//         <span>{vote_average}</span>
//       </div>
//       <div className="movie-over">
//         <h2>Overview</h2>
//         <p>{overview}</p>
//       </div>
//     </div>
//   );
// };

// export default Movie;
