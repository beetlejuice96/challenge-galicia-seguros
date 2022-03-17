// export type axiosResponse<T = any> = {
//     success: true;
//     statusCode: number;
//     payload: T;
//   };

// export type axiosError = {
//   success: false,
//   error: {
//     message: string,
//     code?: number,
//     url?: string,
//     method?: string,
//   },
// };

const handleError = (axiosErr) => {
  let errorResponse; //axiosError
  if (axiosErr.response) {
    const responseError = axiosErr.response;
    errorResponse = {
      success: false,
      error: {
        code: responseError.request.status,
        message: responseError.request.statusText,
        url: responseError.config.url,
        method: responseError.config.method?.toUpperCase(),
      },
    };
  } else {
    errorResponse = {
      success: false,
      error: { message: "ERR_CONNECTION_REFUSED" },
    };
  }
  return errorResponse;
};

const handleResponse = (axiosRes) => {
  const response = {
    success: true,
    statusCode: axiosRes.status,
    payload: axiosRes.data,
  };
  return response;
};

export default { handleResponse, handleError };
