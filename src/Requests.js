const key = "f748ccd37a0287081a16c6922f5df0ac";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  requestTrending: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
  // requestHorror:"https://api.themoviedb.org/3/horror/movie/list?api_key=${key}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
};

export default requests;
