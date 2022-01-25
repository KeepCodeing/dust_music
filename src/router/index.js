import React from "react";
import { Redirect } from "react-router-dom";

import Index from "../pages/index";
import My from "../pages/my";
import Friend from "../pages/friend";
import Recommend from "../pages/index/c-pages/recommend";
import Toplist from "../pages/index/c-pages/toplist";
import Playlist from "../pages/index/c-pages/playlist";
import Djradio from "../pages/index/c-pages/djradio";
import Artist from "../pages/index/c-pages/artist";
import Album from "../pages/index/c-pages/album";

const routes = [
  { path: "/", exact: true, render: () => <Redirect to="/discover" /> },
  {
    path: "/discover",
    component: Index,
    // 子路由
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      { path: "/discover/recommend", component: Recommend },
      { path: "/discover/toplist", component: Toplist },
      { path: "/discover/playlist", component: Playlist },
      { path: "/discover/djradio", component: Djradio },
      { path: "/discover/artist", component: Artist },
      { path: "/discover/album", component: Album },
    ],
  },
  { path: "/my", component: My },
  { path: "/friend", component: Friend },
];

export default routes;
