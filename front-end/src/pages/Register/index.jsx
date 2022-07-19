import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import InputForm from '../../../components/InputForm/index';
// import ButtonForm from '../../../components/ButtonForm/index';

export default function Register() {
  // const [setRedirect] = React.useState(false);
  const [setUser] = React.useState(['']);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [isError, setIsError] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);

  async function create() {
    axios.post('http://localhost:3001/register', {
      name,
      email,
      password,
    }).then((newUser) => {
      setUser(newUser.data);
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
  }, [name, password, email]);

  const handleClick = () => {
    create();
    // return <Redirect push to="/customer/products" />;
  };

  return (
    <div>
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
        <Link to="/customer/products">
          <button
            disabled={ isDisabled }
            type="button"
            data-testid="common_register__button-register"
            onClick={ handleClick }
          >
            Cadastrar
          </button>
        </Link>
        {
          isError
            ? (
              <p data-testid="common_register__element-invalid_register">
                { error }
              </p>)
            : null
        }
      </form>
    </div>
  );
}
