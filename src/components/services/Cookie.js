import Cookie from 'js-cookie';

const SetCookie = (key, value) => {
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

const GetCookie = (key) => Cookie.get(key);

const RemoveCookie = (key) => Cookie.remove(key);

export { SetCookie, GetCookie, RemoveCookie };
