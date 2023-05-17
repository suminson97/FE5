import React from "react";
// import { createContext } from "react";
import HelloLicatTwo from "./HelloLicatTwo";
import { UserInfo } from "../App";

export default function HelloLicat() {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            <h2>{value.id}</h2>
            <strong>{value.name}</strong>
            <HelloLicatTwo />
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
}
