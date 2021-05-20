import React, { Component } from "react";

import { connect } from "react-redux";
import Layout from "../../components/Layout";

import Main from "../../pages/Main";
import Movie from "../../pages/Movie";
import { getPhotos } from "../../actions/pageActions";

import { Redirect, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Layout
        component={
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/movie" component={Movie} />
          </Switch>
        }
      />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.user,
    page: store.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotosAction: (year) => dispatch(getPhotos(year)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
