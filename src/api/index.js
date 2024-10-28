export const getUserInfo = (data) => {
  console.log("🚀 ~ getUserInfo ~ data:", data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "zhangsan", ...data });
    }, 2000);
  });
};
