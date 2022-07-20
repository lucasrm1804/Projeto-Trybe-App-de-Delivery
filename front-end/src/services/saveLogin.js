const saveLogin = (user) => {
  localStorage.setItem('user', JSON.stringify({ user }));
};

export default saveLogin;
