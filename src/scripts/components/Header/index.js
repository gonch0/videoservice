import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth";
import { connect } from "react-redux";

import { filmsSearch } from "../../actions/filmsActions";
import PropTypes from "prop-types";

const Header = ({ filmsSearch }) => {
  const [query, setQuery] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    filmsSearch(query);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className="header">
      <Link to="/">
        <h1>Видеосервис</h1>
      </Link>

      <form className="search" onSubmit={handleFormSubmit}>
        <div className="flex">
          <input
            type="text"
            placeholder="Поиск"
            className="flex mr-15"
            onChange={handleInputChange}
          />

          <button className="btn" type="submit">
            Найти
          </button>
        </div>
      </form>

      <Auth />
    </header>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filmsSearch: (query) => dispatch(filmsSearch(query)),
  };
};

export default connect(null, mapDispatchToProps)(Header);


Header.propTypes = {
    filmsSearch: PropTypes.func.isRequired,
};
