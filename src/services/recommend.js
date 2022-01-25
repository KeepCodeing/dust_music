import request from "./axios";

export const getTopBanner = function () {
  return request({
    method: "GET",
    url: "/banner",
  });
};
