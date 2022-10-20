const API_key = process.env.API_key;

module.exports = {
  reactStrictMode: true,
  async rewrites () {
    return [{
      source : "/api/movies",
      destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}`,
    },{
      source : "/api/movies/:movieID",
      destination : `https://api.themoviedb.org/3/movie/:movieID?api_key=${API_key}`,
    }]
  }
}
