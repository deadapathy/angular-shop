import axios from "axios";

/* This code is creating an instance of the Axios library with a base URL and default headers, and
setting a timeout of 5 seconds. It also defines an interceptor function that adds an authorization
header to each request using a token stored in local storage. Finally, it exports the instance as
`` for use in making HTTP requests to the API. */

const $host = axios.create({
  baseURL: "http://localhost:5000/api/",

  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

// const authInterceptor = (config) => {
//     config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
//     return config
// }

// $host.interceptors.request.use(authInterceptor)

export { $host };
