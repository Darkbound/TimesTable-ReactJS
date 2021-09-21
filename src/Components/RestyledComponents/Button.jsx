import { Button as AntdButton } from "antd";

export const Button = ({ ...props }) => {
  return <AntdButton {...props} shape="round" style={{ borderRadius: 15 }} block />;
};
