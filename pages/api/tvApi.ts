const API_KEY = "1ca1e9791adc365aa40568689f37c4f1";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getTv(kind: string) {
  return fetch(`${BASE_URL}/tv/${kind}?api_key=${API_KEY}&language=ko-KR`).then(
    (res) => res.json()
  );
}

export async function getPopularTv() {
  return fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=ko-KR`).then(
    (res) => res.json()
  );
}
