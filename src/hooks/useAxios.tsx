import axios from 'axios';

export default function useAxios() {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_AXIOS_BASE_URL
  });

  return { api: instance };
}
