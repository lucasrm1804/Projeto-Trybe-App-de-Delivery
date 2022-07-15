import React from 'react';

export default function Login() {
  return (
    <div>
      <form>
        <label htmlFor="email">
          {' '}
          Login
          <input
            type="email"
            name="email"
            id="email"
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="password">
          {' '}
          Password
          <input
            type="password"
            name="password"
            id="password"
            data-testid="common_login__input-password"
          />
        </label>
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
    </div>
  );
}
