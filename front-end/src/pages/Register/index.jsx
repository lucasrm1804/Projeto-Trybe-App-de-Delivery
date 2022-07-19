import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Register() {
  const history = useHistory();
  const [setUser] = React.useState(['']);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [register, setRegister] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);

  async function create() {
    axios.post('http://localhost:3001/register', {
      name,
      email,
      password,
    }).then((newUser) => {
      setUser(newUser.data);
      setRegister(true);
    }).catch((err) => {
      setIsError(true);
      setError(err.response.data.message);
    });
  }

  const handleButton = () => {
    const re = /\S+@\S+\.\S+/;
    const doze = 12;
    const seis = 6;
    if (name.length > doze && re.test(email) && password.length >= seis) {
      return setIsDisabled(false);
    }
    return setIsDisabled(true);
  };

  React.useEffect(() => {
    handleButton();
    if (isError === true) {
      return history.push('/customer/products');
    }
  });

  const handleClick = () => {
    create();
  };

  const messageError = () => {
    if (isError && register === false) {
      return (
        <p data-testid="common_register__element-invalid_register">
          { error }
        </p>
      );
    }
  };

  return (
    <div>
      {/* {
        isError && register === false
          ? (
            <p data-testid="common_register__element-invalid_register">
              { error }
            </p>)
          : ( */}
      <form>
        <input
          labelname="Name"
          labelhtml="name"
          id="name"
          data-testid="common_register__input-name"
          name="name"
          type="text"
          onChange={ (e) => setName(e.target.value) }
        />
        <input
          labelname="Email"
          labelhtml="email"
          id="email"
          data-testid="common_register__input-email"
          name="email"
          type="email"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          labelname="Password"
          labelhtml="password"
          id="password"
          data-testid="common_register__input-password"
          name="password"
          type="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button
          disabled={ isDisabled }
          type="button"
          data-testid="common_register__button-register"
          onClick={ handleClick }
        >
          Cadastrar
        </button>
      </form>
      {
        messageError()
      }
      {/*
          )
      } */}
    </div>
  );
}
