import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const Footer = () => {
  const store = useSelector((s) => s.date);
  console.log("store", store);
  return (
    <div className="l_footer__wrapper">
      Hero {store?.selected} Copyright © Todos los derechos reservados
    </div>
  );
};

export default Footer;
