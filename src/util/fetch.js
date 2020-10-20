import axios from 'axios';
const CONTACT_API = 'https://simple-contact-crud.herokuapp.com';


const fetch = (url, method, param1, param2) => {
  return new Promise((resolve, reject) => {
    axios[method](url, param1, param2)
      .then(res => resolve(res.data))
      .catch(err => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.'
        };
        if (!err.response) reject(defaultError);
        else if (!err.response.data) reject(defaultError);
        else reject(err.response.data);
      });
  });
};


export const contactApi = async (payload) => {
  let id = payload.id ? `/${payload.id}`: '';
  let body = payload.body ? payload.body : '';
  return await fetch(`${CONTACT_API}/contact${id}`, payload.method, body );
};
