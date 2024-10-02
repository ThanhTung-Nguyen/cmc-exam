import { notification } from "antd";

type NotiType = "success" | "error";

type NotiPlacement = "topRight" | "bottomRight";

export const openNotification = (
  type: NotiType,
  message?: string,
  duration?: number,
  placement?: NotiPlacement
) => {
  const config = {
    message: message ? message : "",
    duration: duration ? duration : 3,
    placement: placement ? placement : "topRight",
  };
  notification[type](config);
};
