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
function request(config) {
  const history = createBrowserHistory();
  console.log("🚀 ~ request ~ data:", config);
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
    console.log("🚀 ~ request ~ data:", body);
    head["Content-Type"] = "application/x-www-form-urlencoded";
  }

  let token = localStorage.getItem("token");
  if (token) {
    head["authrization"] = token;
    console.log("🚀 ~ request ~ head:", head);
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
    .then((response) => {
      console.log("🚀 ~ .then ~ response:", response);
      const { status, statusText } = response;
      if (/^(2|3)\d{2}$/.test(response.status)) {
        return response.json();
      }
      // 未登录的话，跳转到登录页面
      if (response.status == 401) {
        Toast.show({
          content: statusText,
          position: "top",
        });
        history.push("/saga-login");
        return;
      }
      return Promise.reject({
        code: -100,
        status,
        statusText,
      });
    })
    .catch((err) => {
      console.log("🚀 ~ .then ~ err:", err);
      Toast.show({
        content: err.statusText,
      });
    });
}

export function http(config) {
  return request(config);
}

// 快速注册
["GET", "HEAD", "DELETE", "OPTIONS"].forEach((item) => {
  http[item.toLowerCase()] = (url, config) => {
    if (!_.isPlainObject(config)) config = {};
    config["url"] = url;
    config["method"] = item;
    http(config);
  };
});

["POST", "PUT", "PATCH"].forEach((item) => {
  http[item.toLowerCase()] = (url, body, config) => {
    if (!_.isPlainObject(config)) config = {};
    config["url"] = url;
    config["method"] = item;
    config["body"] = body;
    http(config);
  };
});
