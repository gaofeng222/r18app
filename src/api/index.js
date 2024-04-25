import request from "@/utils/request";

export const getLists = () => {
  return request.get("/lists");
};
