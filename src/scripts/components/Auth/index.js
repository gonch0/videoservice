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

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     setLoggedIn(true);
  //     setNewLogin(user.login);
  //   }
  // }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="flex aic">
            <p className="mr-15">{user.name}</p>
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
        <form onSubmit={logIn} name="login-form">
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
