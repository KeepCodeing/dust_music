import React, { memo } from "react";

import NavHeader from "./components/nav-header";
import Footer from "./components/footer";

export default memo(function App() {
  return (
    <div>
      <NavHeader />
      <Footer />
    </div>
  );
});
