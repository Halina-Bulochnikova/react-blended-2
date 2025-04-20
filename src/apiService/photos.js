import axios from 'axios';

const API_KEY = 'PjpInOhywj4qRK8TnuSkTgBPUSFyweK521RxpnGapTDBtl1WeTGcjlXf';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const fetchGetPhotos = async (query, page) => {
  const { data } = await axios.get(
    `https://api.pexels.com/v1/search?query=${query}&page=${page}`
  );

  return data;
};
