import React from 'react';
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
      <button
        type="button"
        data-testid="common_login__button-login"
      >
        LOGIN
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>
    </form>
  );
}
