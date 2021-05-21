import React from "react";
import { setTab } from "../../actions/tabActions";
import { connect } from "react-redux";
import Tabs from "components/Tabs";

const Channels = () => {
  return (
    <main className="main">
      <Tabs />
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

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
