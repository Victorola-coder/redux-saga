export const loginRequest = (credentials: {
  username: string;
  password: string;
}) => ({
  type: "LOGIN_REQUEST",
  payload: credentials,
});

export const loginSuccess = (user: { username: string; name: string }) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = (error: string) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
