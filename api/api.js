import axios from 'axios';

export const testLogin = async (url) => {
  let json = await axios({
    method: 'GET',
    cors: true,
    timeout: 6000,
    headers: {
      'Content-Type': 'application/json',
    },
    url: url,
  });
  return json;
};
