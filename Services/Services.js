import {postReq2} from './Api';

export const userLogin = async data => {
  console.log('dtaaa', data);
  return postReq2('Authentication/login.php', data);
};
