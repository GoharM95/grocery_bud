import React, { useState } from "react";
import { useEffect } from "react";
import "./Alert.css";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
