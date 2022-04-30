import axios from "axios";

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Accept: 'application/json',
};

const api = axios.create({
  baseURL: "https://anima-kids-api.herokuapp.com",
  headers: headers
})

export default api;