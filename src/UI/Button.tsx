import React from "react";
import "./Button.module.css";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button>{children}</button>;
};
