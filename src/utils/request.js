import axios from "axios";
axios.interceptors.request.use((config) => {
  config.headers["app-id"] = "61362c480b63df4236b48ed4";
  return config;
});
//get request
export const request = {
  get: axios.get,
};

//post -form submit
