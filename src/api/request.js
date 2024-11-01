import { Toast } from "antd-mobile";
import { createBrowserHistory } from "history"; // history路由
import _ from "lodash";
import qs from "qs";
// fetch默认配置
let head = new Headers();
head.append("name", "zhsan");
head.append("Content-Type", "application/json");

/**
 *
 * @param {string} url
 * @param {object} data
 * @param {object} config  {headers: {}} 用户自定义的header，会覆盖默认的header
 * @returns
 */

export function http(config) {
  const history = createBrowserHistory();
  if (!_.isPlainObject(config)) config = {};
  config = Object.assign(
    {
      url: "",
      method: "GET",
      credentials: "include",
      headers: null,
      body: null,
      params: null,
      responseType: "json",
      signal: null,
    },
    config
  );
  if (!config.url) throw new TypeError("url must be required");
  if (!_.isPlainObject(config.headers)) config.headers = {};
  if (config.params !== null && !_.isPlainObject(config.params))
    config.params = null;
  let {
    url,
    body,
    method,
    credentials,
    headers,
    params,
    responseType,
    signal,
  } = config;
  if (!_.isPlainObject(headers)) headers = {};
  if (params) {
    url = url + "?" + qs.stringify(params);
  }
  if (_.isPlainObject(body)) {
    body = qs.stringify(body);
    head["Content-Type"] = "application/x-www-form-urlencoded";
  }

  let token = localStorage.getItem("token");
  if (token) {
    head["authrization"] = token;
  }

  method = method.toUpperCase();
  config = {
    method,
    credentials,
    headers: { ...head, ...headers },
    cache: "no-cache",
    signal,
  };
  if (/^(POST|PUT|PATCH)$/i.test(method) && body) config.body = body;
  return fetch(url, config)
    .then((response) => response.json())
    .catch((err) => {
      console.log("🚀 ~ .then ~ err:", err);
      Toast.show({
        content: err.statusText,
      });
      return Promise.reject(err);
    });
}

// 快速注册
["GET", "HEAD", "DELETE", "OPTIONS"].forEach((item) => {
  http[item.toLowerCase()] = (url, config) => {
    if (!_.isPlainObject(config)) config = {};
    config["url"] = url;
    config["method"] = item;
    return http(config);
  };
});

["POST", "PUT", "PATCH"].forEach((item) => {
  http[item.toLowerCase()] = (url, body, config) => {
    if (!_.isPlainObject(config)) config = {};
    config["url"] = url;
    config["method"] = item;
    config["body"] = body;
    return http(config);
  };
});
