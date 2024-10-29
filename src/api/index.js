export const getUserInfo = (data) => {
  console.log("🚀 ~ getUserInfo ~ data:", data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "zhangsan", ...data });
    }, 2000);
  });
};

export async function fetchSmart(url, configObj) {
  const originObj = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const response = await fetch(url, Object.assign(originObj, configObj))
    .then(function (response) {
      return response;
    })
    .catch(function (err) {
      return err;
    });
  return response.json();
}
