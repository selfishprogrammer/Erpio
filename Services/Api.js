import axios from 'axios';
import {base_url} from '../constants/Urls';
export const postReq2 = (des_url, data) => {
  let url = base_url + des_url;
  console.log(url);
  return new Promise((resolve, reject) => {
    let headers = 'Content-Type: application/json';

    axios
      .post(url, data, headers)
      .then(function (response) {
        resolve(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        reject(error);
      })
      .finally(function () {
        // always executed
      });
  });
};
