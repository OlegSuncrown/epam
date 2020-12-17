import axios from "axios";

function setAuthToken(token) {
  let bearerToken = `Bearer ${token}`;
  if (token) {
    axios.defaults.headers.common["Authorization"] = bearerToken;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
export default setAuthToken;
