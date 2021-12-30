export const fetchMovies = function () {
  return fetch("http://www.alanfoster.me/movies.json").then((response) =>
    response.json()
  );
};

export const add = (a, b) => {
  return a + b;
};
