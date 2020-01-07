import React from "react";
import { Button } from "antd";

export default function FormButton({
  text = "Default text",
  type = "primary",
  htmlType = "submit",
  classes = undefined
}) {
  return (
    <Button type={type} htmlType={htmlType} className={classes}>
      {text}
    </Button>
  );
}
