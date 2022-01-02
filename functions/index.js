import fetch from 'node-fetch';

export const fetchMovies = () => {
  return fetch("http://www.alanfoster.me/movies.json").then((response) =>
    response.json()
  );
};

export const fetchMockData = (callback) => {
  setTimeout(() => callback("Phat trien web nang cao"), 1000);
};

export const add = (a, b) => {
  return a + b;
};
