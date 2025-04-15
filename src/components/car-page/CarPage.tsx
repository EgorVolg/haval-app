import React from "react";
import styles from "./CarPage.module.css"
import { useParams } from "react-router-dom";

export const CarPage = () => {
    const { code } = useParams<{ code: string }>();

    return <div>hello world</div>
}