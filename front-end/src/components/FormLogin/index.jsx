import React from 'react';
import ButtonForm from '../ButtonForm';
import InputForm from '../InputForm';

export default function FormLogin() {
  return (
    <form>
      <InputForm
        labelName="Login"
        labelHtml="email"
        id="email"
        testId="common_login__input-email"
        name="email"
        type="email"
      />
      <InputForm
        labelName="Password"
        labelHtml="password"
        id="password"
        testId="common_login__input-password"
        name="password"
        type="password"
      />
      <ButtonForm
        datatest="common_login__button-login"
        name="Login"
      />
      <ButtonForm
        datatest="common_login__button-register"
        name="Ainda não tenho conta"
      />
    </form>
  );
}
