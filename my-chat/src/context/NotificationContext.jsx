import { createContext, useState } from "react";

export const NotificationContext = createContext();
export const NotificationContextProvider = ({ children }) => {
  const [noti, setNoti] = useState("");
  const handleNoti = (val) => {
    setNoti(val);
  };

  return (
    <NotificationContext.Provider value={{ noti, handleNoti }}>
      {children}
    </NotificationContext.Provider>
  );
};
