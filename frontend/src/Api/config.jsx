

// for local ----------->
const baseURL = "http://192.168.1.4:8000";
// for server ------------>


const config = {
  baseURL : baseURL,
  apiBaseURL: `${baseURL}/api/v1`,
  staticBaseURL: `${baseURL}/static/`,
  apiTimeout: 500000,
};

export default config;
