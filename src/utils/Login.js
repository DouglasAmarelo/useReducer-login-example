const isUsernameValid = (name) => name === 'douglas';
const isPasswordValid = (password) => password === '1234';

const login = async ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isUsernameValid(username) && isPasswordValid(password)) {
        resolve();
        return;
      }

      reject();
    }, 1000);
  });
};

export { login };
