import React, { Component } from "react";

import { connect } from "react-redux";
import Layout from "../../components/Layout";

import { Page } from "../../components/Page";
import { getPhotos } from "../../actions/pageActions";

class App extends Component {
  render() {
    const { page, getPhotosAction } = this.props;

    return (
      <>
        <Layout />

        <Page photos={page.photos} year={page.year} getPhotos={getPhotosAction} isFetching={page.isFetching} />
      </>
    );
  }
}

const mapStateToProps = (store) => {
  console.log(store);
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
