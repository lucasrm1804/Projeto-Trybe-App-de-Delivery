import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ButtonForm from '../ButtonForm';
import InputForm from '../InputForm';
import dbLogin from '../../services/dbLogin';

export default function FormLogin() {
  const [passwordInput, setPasswordInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const emailValidation = (email) => {
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return emailRegex.test(email);
  };

  const a = {
    email: 'zebirita@email.com',
    password: '$#zebirita#$',
  };
  console.log(JSON.stringify(a));
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
  useEffect(() => {
    dbLogin(a).then(() => console.log('abc'));
  });
  const messageError = () => {
    if (emailInvalid || passwordInvalid) {
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
      />
      <NavLink to="/register">
        <ButtonForm
          datatest="common_login__button-register"
          name="Ainda não tenho conta"
          disabled={ false }
        />
      </NavLink>

      {messageError()}
    </form>
  );
}
