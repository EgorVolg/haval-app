import React from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
  containerType: string;
};

export const Container = ({ children, containerType }: ContainerProps) => {
  return <div className={styles[containerType]}>{children}</div>;
};
