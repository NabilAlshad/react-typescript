import React from "react";
import { IStatus } from "../Types";
// interface IStatus {
//   status: "loading" | "success" | "danger";
// }
const Status: React.FC<IStatus> = ({ status }) => {
  let message;
  if (status === "loading") {
    message = "loading";
  }
  if (status === "success") {
    message = "success";
  }
  if (status === "danger") {
    message = "danger";
  }
  return <div>{message}</div>;
};

export default Status;
