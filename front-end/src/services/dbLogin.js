const apiLogin = async (data) => {
  fetch('https://localhost:3001/login', {
    method: 'POST',
    mode: 'cors',
    headers: { Accept: 'application/json',
      'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export default apiLogin;
