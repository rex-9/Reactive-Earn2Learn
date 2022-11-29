const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,24}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-.:;<=>?@]).{8,}$/;

export { USERNAME_REGEX, PASSWORD_REGEX };
