import React from "react";
import { Button } from "antd";

export default function FormButton({
  text = "Default text",
  type = "primary",
  htmlType = "submit",
  classes = undefined,
  disabled = false,
  loading = false,
  styles = undefined
}) {
  return (
    <Button
      type={type}
      htmlType={htmlType}
      className={classes}
      disabled={disabled}
      loading={loading}
      style={styles}
    >
      {text}
    </Button>
  );
}
