export function getImageUrl(person, size = "s") {
  // 动态图片地址
  return "https://gips0.baidu.com/it/u=2705082807,4103023488&fm=3039&app=3039&f=PNG?w=1024&h=1024";
}

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/* 日期格式化 */
export const formatTime = function formatTime(time, template) {
  if (typeof time !== "string") {
    time = new Date().toLocaleString("zh-CN", { hour12: false });
    console.log("🚀 ~ formatTime ~ time:", time);
  }
  if (typeof template !== "string") {
    template = "{0}年{1}月{2}日 {3}:{4}:{5}";
  }
  let arr = [];
  if (/^\d{8}$/.test(time)) {
    let [, $1, $2, $3] = /^(\d{4})(\d{2})(\d{2})$/.exec(time);
    arr.push($1, $2, $3);
  } else {
    arr = time.match(/\d+/g);
  }
  return template.replace(/\{(\d+)\}/g, (_, $1) => {
    let item = arr[$1] || "00";
    if (item.length < 2) item = "0" + item;
    return item;
  });
};

export const timeList = [
  "零",
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
  "十",
  "十一",
  "十二",
];
