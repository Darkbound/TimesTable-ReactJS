import { StyledColorBlock } from "./elements";

export const ColorBlock = ({ disabled, colorRgba, blockSelected, onClick, ...props }) => {
  const handleColorBlockOnClick = () => !disabled && onClick(colorRgba);

  return (
    <StyledColorBlock
      {...props}
      disabled={disabled}
      onClick={handleColorBlockOnClick}
      colorRgba={colorRgba}
      blockSelected={blockSelected}
    />
  );
};
