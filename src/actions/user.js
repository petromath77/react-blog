export const IS_LOGGED_IN = 'IS_LOGGED_IN';

export const setIsLoggedIn = isLoggedIn => {
  return {
    type: IS_LOGGED_IN,
    isLoggedIn,
  };
};
