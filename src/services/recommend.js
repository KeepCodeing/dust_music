import request from "./axios";

export const getTopBanner = function () {
  return request({
    method: "GET",
    url: "/banner",
  });
};

export const getHotRecommend = function (limit) {
  return request({
    method: "GET",
    url: `/personalized?limit=${limit}`,
  });
};
