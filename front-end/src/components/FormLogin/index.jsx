import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import ButtonForm from '../ButtonForm';
import InputForm from '../InputForm';

export default function FormLogin() {
  const [redirect, setRedirect] = React.useState(false);

  const handleClick = () => {
    setRedirect(true);
  };

  return (
    <form>
      {
        redirect ? <Redirect to="/register" /> : (
          <>
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
            {/* Alteração feita porque o onCLick não funcionava no componente e a mesma falta em outros */}
            <button
              type="button"
              data-testid="common_login__button-register"
              // name="Ainda não tenho conta"
              onClick={ handleClick }
            >
              Ainda não tenho conta
            </button>
          </>
        )
      }
    </form>
  );
}
