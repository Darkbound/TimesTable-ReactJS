import { StyledRoundedBlockButton } from "./elements";

export const Button = ({ ...props }) => {
  return <StyledRoundedBlockButton {...props} shape="round" style={{ borderRadius: 15 }} block />;
};
