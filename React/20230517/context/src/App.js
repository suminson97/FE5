import { createContext } from "react";
import HelloLicat from "./components/HelloLicat";

const UserInfo = createContext();

const App = () => {
  return (
    <UserInfo.Provider value={{ name: "gary", id: "garyIsFree" }}>
      <HelloLicat />
    </UserInfo.Provider>
  );
};

export default { UserInfo, App };
