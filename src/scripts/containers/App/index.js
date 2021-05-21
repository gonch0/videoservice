import React, { Component } from "react";

import { connect } from "react-redux";
import Layout from "../../components/Layout";

import Main from "../../pages/Main";
import Movie from "../../pages/Movie";
import Channels from "../../pages/Channels";

import { getPhotos } from "../../actions/pageActions";
import { setLogin } from "../../actions/loginActions";
import { setUser } from "../../actions/userActions";

import { Redirect, Route, Switch } from "react-router-dom";

export const USER_NAME = "USER_NAME";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { setLogin, setUser } = this.props;

    const userName = localStorage.getItem(USER_NAME);

    if (userName !== null) {
      setLogin(true);
      setUser({ name: userName });
    }
  }

  render() {
    return (
      <Layout
        component={
          <Switch>
            <Route path="/" exact component={Main} />
              <Route path="/channels" component={Channels} />
            <Route path="/movie/:id" component={Movie} />

          </Switch>
        }
      />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    isLoggedIn: store.login.isLoggedIn,
    user: store.user,
    page: store.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (isLoggedIn) => dispatch(setLogin(isLoggedIn)),
    setUser: (userName) => dispatch(setUser(userName)),
    getPhotosAction: (year) => dispatch(getPhotos(year)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
