import React, { useState } from "react";

import { setLogin } from "../../actions/loginActions";
import { connect } from "react-redux";

import Modal from "react-modal";
Modal.setAppElement("#root");

const Auth = ({ setLogin }) => {
  const [isAuthOpen, toggleAuth] = useState(false);

  const openAuthModal = () => {
    toggleAuth(true);
  };

  const closeAuthModal = () => {
    toggleAuth(false);
  };

  const logIn = (e) => {
    e.preventDefault();

    setLogin(true);

    closeAuthModal();
  };

  // const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <>
      <button className="btn" onClick={openAuthModal} type="button">
        Войти
      </button>

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
          />
          <input type="password" className="form-input" placeholder="Пароль" />

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
        isLoggedIn: store.isLoggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLogin: (isLoggedIn) => dispatch(setLogin(isLoggedIn))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
