import React from "react";
import { CaretRightIcon } from "@phosphor-icons/react";

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
      {title} <CaretRightIcon size={24} />
    </a>
  );
};

export default NavigationBlock;
