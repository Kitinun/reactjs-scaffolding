import join from 'url-join';
// import store from "../redux/store";
const isAbsoluteURLRegex = /^(?:\w+:)\/\//

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = request => {
  // const accessToken = helper.sessionGet('token');
  // const token = JSON.parse(accessToken)
  if (isHandlerEnabled(request)) {
    // store.dispatch(loading(true));
  }
  if (!isAbsoluteURLRegex.test(request.url)) {
    request.url = join(process.env.REACT_APP_API_ENDPOINT, request.url);
  }
  // if (accessToken) request.headers.Authorization = `Bearer ${token}`;
  request.timeout = 85000;
  return request;
};

export const successHandler = response => {
  if (isHandlerEnabled(response)) {
    // store.dispatch(loading(false));
  }
  return response;
};

export const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
    // store.dispatch(loading(false));
  }
  return Promise.reject({ ...error });
};