import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import NavHeader from "./components/nav-header";
import Footer from "./components/footer";

import Routes from "../src/router";
import store from "./store";

export default memo(function App() {
  return (
    <div>
      <NavHeader />
      <Provider store={store}>{renderRoutes(Routes)}</Provider>
      <Footer />
    </div>
  );
});
