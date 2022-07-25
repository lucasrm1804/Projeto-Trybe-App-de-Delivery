import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../../components/Header/index.module.css';

export default function Adm() {
  const [users, setUsers] = React.useState([]);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [role, setRole] = React.useState('');

  const getAll = async () => {
    await axios.get('http://localhost:3001/adm/manage')
      .then((allUsers) => {
        setUsers(allUsers.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function create() {
    axios.post('http://localhost:3001/adm/manage', {
      name,
      email,
      password,
      role,
    }).then((newUser) => {
      setLoginUser(newUser.data);
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
    if (name.length >= doze && re.test(email) && password.length >= seis) {
      return setIsDisabled(false);
    }
    return setIsDisabled(true);
  };

  const handleClick = () => {
    create();
  };

  React.useEffect(() => {
    handleButton();
  });

  React.useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <header className="header">
        <nav className={ styles.navbar }>
          <div data-testid="customer_products__element-navbar-link-products">
            <Link to="/customer/products">GERENCIAR USUÁRIOS</Link>
          </div>
          <div data-testid="customer_products__element-navbar-link-orders">
            <Link to="/customer/orders">Trybeer Admin</Link>
          </div>
          <Link
            to="/login"
          >
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-logout"
            >
              Sair
            </button>
          </Link>
        </nav>
      </header>
      <form>
        <label htmlFor="name">
          Nome
          <input
            labelname="Name"
            labelhtml="name"
            id="name"
            data-testid="admin_manage__input-name"
            name="name"
            type="text"
            placeholder="Nome e sobrenome"
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            labelname="Email"
            labelhtml="email"
            id="email"
            data-testid="admin_manage__input-email"
            name="email"
            type="email"
            placeholder="seu-email@site.com.br"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            labelname="Password"
            labelhtml="password"
            id="password"
            data-testid="admin_manage__input-password"
            name="password"
            type="password"
            placeholder="*******"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <label htmlFor="tipo">
          Tipo
          <select
            id="tipo"
            name="tipo"
            data-testid="admin_manage__select-role"
            onChange={ (e) => setRole(e.target.value) }
          >
            <option value="default">Escolher</option>
            <option value="seller">Seller</option>
            <option value="customer">Customer</option>
          </select>
        </label>
        <button
          disabled={ isDisabled }
          type="button"
          data-testid="admin_manage__button-register"
          onClick={ handleClick }
        >
          Cadastrar
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={ user.id }>
              <td
                data-testid={ `admin_manage__element-user-table-item-number-${index}` }
              >
                {user.id}
              </td>

              <td
                data-testid={ `admin_manage__element-user-table-name-${index}` }
              >
                {user.name}
              </td>

              <td
                data-testid={ `admin_manage__element-user-table-email-${index}` }
              >
                {user.email}
              </td>

              <td
                data-testid={ `admin_manage__element-user-table-role-${index}` }
              >
                {user.role}
              </td>
              <td>
                <button
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                  type="button"
                  // onClick={ onClick }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
