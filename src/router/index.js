import Index from "../pages/index";
import My from "../pages/my";
import Friend from "../pages/friend";

const routes = [
  { path: "/", exact: true, component: Index },
  { path: "/my", component: My },
  { path: "/friend", component: Friend },
];

export default routes;
