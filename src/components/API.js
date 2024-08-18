import axios from 'axios';
axios.defaults.baseURL = 'https://66bde1d974dfc195586decde.mockapi.io';

export const requestGetCampers = async () => {
  const { data } = await axios.get('/campers');
  return data;
};
