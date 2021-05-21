import React, { useState } from "react";
import { setTab } from "../../actions/tabActions";
import { connect } from "react-redux";
import Tabs from "components/Tabs";
import useFetch from "use-http";
import { Link } from "react-router-dom";

const Main = () => {
  const renderChannels = () => {
    return <div className="content films">channels</div>;
  };

  const options = {};
  const { loading, error, data = [] } = useFetch("/films.json", options, []);

  const renderFilms = () => {
    return (
      <ul>
        {data.map((film) => (
          <li key={film.id}>
            <Link to={`/movie/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <main className="main">
      <Tabs />
      {error && "Error!"}
      {loading && "Loading..."}
      {renderFilms()}
    </main>
  );
};

const mapStateToProps = (store) => {
  return {
    currentTab: store.tabs.currentTab,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTabAction: (tabName) => dispatch(setTab(tabName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
