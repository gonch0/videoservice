import React, { useState, useCallback } from "react";

import { setLogin } from "../../actions/loginActions";
import { setUser } from "../../actions/userActions";
import { connect } from "react-redux";

import Modal from "react-modal";
Modal.setAppElement("#root");

import { USER_NAME } from "../../containers/App";

const Auth = ({ isLoggedIn, setLogin, setUser, user }) => {
  const [isAuthOpen, toggleAuth] = useState(false);
  const [loginForm, setLoginForm] = useState({});
  const [isUserNameEditOpen, setUserNameEditOpen] = useState(false);
  const [userNameInput, setUserNameInput] = useState({});

  const openAuthModal = () => {
    toggleAuth(true);
  };

  const closeAuthModal = () => {
    toggleAuth(false);
  };

  const logIn = useCallback(
    (e) => {
      e.preventDefault();
      setLogin(true);
      setUser(loginForm);
      localStorage.setItem(USER_NAME, loginForm.name);

      closeAuthModal();
    },
    [loginForm, setUser]
  );

  const logOut = useCallback(() => {
    setLogin(false);
    setUser({});
    localStorage.removeItem(USER_NAME);
  }, [setUser]);

  const handleInputChange = useCallback((e) => {
    const field = e.target.name;

    setLoginForm({ ...loginForm, [field]: e.target.value });
  });

  const handleUserNameClick = () => {
    setUserNameEditOpen(true);
  };
  const handleUserNameBlur = () => {
    setUserNameEditOpen(false);
    setUser({ pass: user.pass, name: userNameInput });
  };

  const handleUserNameChange = (e) => {
    setUserNameInput(e.target.value);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="flex aic">
            {isUserNameEditOpen ? (
              <input
                type="text"
                className="input"
                autoFocus
                defaultValue={user.name}
                onBlur={handleUserNameBlur}
                onChange={handleUserNameChange}
              />
            ) : (
              <p className="mr-15" onClick={handleUserNameClick}>
                {user.name}
              </p>
            )}
            <button className="btn" onClick={logOut} type="button">
              Выйти
            </button>
          </div>
        </>
      ) : (
        <button className="btn" onClick={openAuthModal} type="button">
          Войти
        </button>
      )}

      <Modal
        isOpen={isAuthOpen}
        onRequestClose={closeAuthModal}
        contentLabel="Авторизация"
      >
        <form onSubmit={logIn} name="login-form" className="grid-row-24">
          <input
            type="text"
            className="form-input"
            placeholder="Пользователь"
            onChange={handleInputChange}
            name="name"
          />
          <input
            type="password"
            name="pass"
            className="form-input"
            placeholder="Пароль"
            onChange={handleInputChange}
          />

          <button className="btn" title="submit">
            Логин
          </button>
        </form>
      </Modal>
    </>
  );
};

const mapStateToProps = (store) => {
  return {
    isLoggedIn: store.login.isLoggedIn,
    user: store.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (isLoggedIn) => dispatch(setLogin(isLoggedIn)),
    setUser: (loginForm) => dispatch(setUser(loginForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
