import hyRequest from "./index";

export const getProfileInfo = () => {
  return hyRequest.get("/profile", {});
};
