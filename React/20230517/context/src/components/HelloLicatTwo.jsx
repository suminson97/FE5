import React from "react";
import { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

export default function HelloLicatTwo() {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            <h2>Two : {value.id}</h2>
            <strong>Two : {value.name}</strong>
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
}
