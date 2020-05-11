import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

export const AddButton = ({ label, onClick, style }) => {
  return (
    <Button
      endIcon={<AddIcon />}
      variant={"outlined"}
      onClick={onClick}
      style={{
        marginTop: 16,
        marginRight: 4,
        float: "right",
        display: "flex",
        alignItems: "flex-start",
        ...style
      }}
    >
      {label}
    </Button>
  );
};
