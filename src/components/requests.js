const APIKey = "32b594c395a85170e07fc2ebf5f43f7a";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKey}&language=en-US`,
  fetchAction: `/discover/movie?api_key=${APIKey}&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${APIKey}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${APIKey}&with_genres=27`,
  fetchRomance: `/discover/movie?api_key=${APIKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKey}&with_genres=99`,
};

export default requests;
