import React from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
  containerType: "header" | "body";
};

export const Container = ({ children, containerType }: ContainerProps) => {
  return <div className={styles[containerType]}>{children}</div>;
};
