import axios from 'axios';

export const testLogin = async (ip, port, username, password) => {
  let json = await axios({
    method: 'GET',
    cors: true,
    timeout: 6000,
    headers: {
      'Content-Type': 'application/json',
    },
    url: `http://${ip}:${port}/scripts/trs.exe?fct=10010&entry=${username}&password=${password}&dn=fm`,
  });
  return json;
};
