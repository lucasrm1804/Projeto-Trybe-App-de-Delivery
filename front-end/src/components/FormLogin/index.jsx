import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ButtonForm from '../ButtonForm';
import InputForm from '../InputForm';
import AppContext from '../../context/appContext';

export default function FormLogin() {
  const [passwordInput, setPasswordInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const { loginUser, setLoginUser } = useContext(AppContext);

  const emailValidation = (email) => {
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return emailRegex.test(email);
  };
  const history = useHistory();

  const handleClick = async () => {
    axios.post('http://localhost:3001/login', {
      email: emailInput,
      password: passwordInput,
    }).then((response) => {
      setLoginUser(response.data);
      setLoginSuccess(true);
    })
      .catch(() => setLoginFail(true));
  };
  useEffect(() => {
    if (loginUser.email === 'adm@deliveryapp.com') {
      localStorage.setItem('adm', JSON.stringify(loginUser));
      return history.push('/admin/manage');
    }
    if (loginSuccess) {
      history.push('/customer/products');
      localStorage.setItem('user', JSON.stringify(loginUser));
    }
  });
  useEffect(() => {
    if (!emailValidation(emailInput)) {
      setEmailInvalid(true);
    } else {
      setEmailInvalid(false);
    }
    const six = 6;
    if (passwordInput.length < six) {
      setPasswordInvalid(true);
    } else {
      setPasswordInvalid(false);
    }
  }, [emailInput, passwordInput, passwordInvalid]);
  const handleChange = ({ target }) => {
    if (target.type === 'email') {
      setEmailInput(target.value);
    }
    if (target.type === 'password') {
      setPasswordInput(target.value);
    }
  };

  const messageError = () => {
    if (loginFail) {
      return (
        <span data-testid="common_login__element-invalid-email">
          Email ou senha invalidos
        </span>
      );
    }
  };
  return (
    <form>
      <InputForm
        labelName="Login"
        labelHtml="email"
        id="email"
        testId="common_login__input-email"
        name="email"
        type="email"
        handleChange={ handleChange }
      />
      <InputForm
        labelName="Password"
        labelHtml="password"
        id="password"
        testId="common_login__input-password"
        name="password"
        type="password"
        handleChange={ handleChange }
      />
      <ButtonForm
        datatest="common_login__button-login"
        name="Login"
        disabled={ emailInvalid || passwordInvalid }
        click={ handleClick }
      />
      <ButtonForm
        datatest="common_login__button-register"
        name="Ainda não tenho conta"
        disabled={ false }
        click={ () => history.push('/register') }
      />
      {messageError()}
    </form>
  );
}
