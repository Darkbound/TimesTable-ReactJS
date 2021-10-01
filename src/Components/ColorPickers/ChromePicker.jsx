import { StyledChromePicker } from "./elements";

export const ChromePicker = ({ currentColor, ...props }) => {
  return <StyledChromePicker {...props} color={currentColor} />;
};
