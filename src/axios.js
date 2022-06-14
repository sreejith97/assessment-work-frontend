import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-work-app.herokuapp.com/",
});

export default instance;
