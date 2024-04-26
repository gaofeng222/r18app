import request from "@/utils/request.js";

export const getLists = () => {
  return request.get("/lists");
};
