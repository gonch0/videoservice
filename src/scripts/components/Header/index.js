import React, { useState } from "react";

import Modal from "react-modal";

export default function Header() {
  const [isAuthOpen, toggleAuth] = useState(false);

  const openAuthModal = () => {
    toggleAuth(true);
  };

  const closeAuthModal = () => {
    toggleAuth(false);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      <h1>Видеосервис</h1>

      <form action="" onSubmit={onFormSubmit}>
        <input type="text" placeholder={`text`} />

        <button className="btn" type={`submit`}>
          Найти
        </button>
      </form>

      <button className="btn" onClick={openAuthModal} type="button">
        Войти
      </button>

      <Modal
        isOpen={isAuthOpen}
        onRequestClose={closeAuthModal}
        contentLabel="Авторизация"
      >
        <form action="">
          <input
            type="text"
            className="form-input"
            placeholder="Пользователь"
          />
          <input type="password" className="form-input" placeholder="Пароль" />
        </form>
      </Modal>
    </header>
  );
}
