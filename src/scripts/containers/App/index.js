import React, { Component, useEffect } from "react";

import { connect } from "react-redux";
import Layout from "../../components/Layout";

import Main from "../../pages/Main";
import Movie from "../../pages/Movie";
import Channels from "../../pages/Channels";

import { setLogin } from "../../actions/loginActions";
import { setUser } from "../../actions/userActions";

import { Route, Switch } from "react-router-dom";
import useFetch from "use-http";
import { setChannels, setFilms } from "../../actions/filmsActions";
import { setComments } from "../../actions/commentsActions";

export const USER_NAME = "USER_NAME";

const App = ({ setLogin, setUser, setFilms, setChannels, setComments }) => {
  const {
    get: getFilms,
    loading: loadingFilms,
    error: errorFilms,
  } = useFetch("/films.json", []);

  const {
    get: getChannels,
    loading: loadingChannels,
    error: errorChannels,
  } = useFetch("/channels.json", []);

  const {
    get: getComments,
    loading: loadingComments,
    error: errorComments,
  } = useFetch("/comments.json", []);

  async function loadData(getData, setData, error) {
    if (!error) {
      const data = await getData();
      setData(data);
    }
  }

  useEffect(() => {
    const userName = localStorage.getItem(USER_NAME);

    if (userName !== null) {
      setLogin(true);
      setUser({ name: userName });
    }

    loadData(getFilms, setFilms, errorFilms);
    loadData(getChannels, setChannels, errorChannels);
    loadData(getComments, setComments, errorComments);
  }, []);

  return (
    <>
      {(errorFilms || errorChannels || errorComments) && "Error!"}
      {(loadingFilms || loadingChannels || loadingComments) && "Loading..."}

      <Layout
        component={
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/channels" component={Channels} />
            <Route path="/movie/:id" component={Movie} />
          </Switch>
        }
      />
    </>
  );
};

const mapStateToProps = (store) => {
  return {
    isLoggedIn: store.login.isLoggedIn,
    user: store.user,
    page: store.page,
    films: store.films.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (isLoggedIn) => dispatch(setLogin(isLoggedIn)),
    setUser: (userName) => dispatch(setUser(userName)),
    setFilms: (film) => dispatch(setFilms(film)),
    setChannels: (channel) => dispatch(setChannels(channel)),
    setComments: (comments) => dispatch(setComments(comments)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
