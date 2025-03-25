import React from "react";
import { CaretRight } from "@phosphor-icons/react";

const NavigationBlock = ({ link, title }) => {
  return (
    <a
      style={{
        width: "100%",
        border: "1px solid lightgray",
        paddingRight: "10px",
        paddingLeft: "10px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
        marginBottom: "20px",
      }}
      href={link}
    >
      {title} <CaretRight size={24} />
    </a>
  );
};

export default NavigationBlock;
