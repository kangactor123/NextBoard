/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/movie",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: "/api/movie/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: "/api/tv",
        destination: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: "/api/tv/:id",
        destination: `https://api.themoviedb.org/3/tv/:id?api_key=${API_KEY}&language=ko-KR`,
      },
    ];
  },
};

module.exports = {
  poweredByHeader: process.env.NODE_ENV === "development",
  reactStrictMode: process.env.NODE_ENV === "development",
};
