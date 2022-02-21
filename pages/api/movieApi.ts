const API_KEY = "1ca1e9791adc365aa40568689f37c4f1";

export function getPopularMovie() {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`
  ).then((res) => res.json());
}
