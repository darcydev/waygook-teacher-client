import React from "react";
import { Button } from "antd";

export default function FormButton({
  text = "Default text",
  type = "primary",
  htmlType = "submit",
  classes = undefined,
  disabled = false
}) {
  return (
    <Button
      type={type}
      htmlType={htmlType}
      className={classes}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}
