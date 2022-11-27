import Cookie from 'js-cookie';

const setCookie = (key, value) => {
  Cookie.set(
    key,
    value,
    {
      expires: 3,
      secure: true,
      sameSite: 'strict',
      path: '/',
    },
  );
};

const getCookie = (key) => Cookie.get(key);

const removeCookie = (key) => Cookie.remove(key);

const checkCookie = (key) => {
  if (getCookie(key)) return true;
  else return false;
};

const isAdmin = () => {
  return checkCookie('user') && JSON.parse(getCookie('user')).role === 'admin';
}

const returnCurrentUser = () => checkCookie('user') ? JSON.parse(getCookie('user')) : {};

export { setCookie, getCookie, removeCookie, checkCookie, returnCurrentUser, isAdmin };
