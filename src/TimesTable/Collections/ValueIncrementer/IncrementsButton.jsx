import { StyledIncrementsButton, StyledIncrementsButtonTitle } from "./elements";

export const IncrementsButton = ({ step, increment, handleSetStepOnClick, ...props }) => {
  const currentlySelected = step === increment;

  const handleButtonOnClick = () => {
    handleSetStepOnClick(increment);
  };
  return (
    <StyledIncrementsButton {...props} type={currentlySelected ? "primary" : "default"} onClick={handleButtonOnClick}>
      <StyledIncrementsButtonTitle level={5} currentlySelected={currentlySelected}>
        x{increment}
      </StyledIncrementsButtonTitle>
    </StyledIncrementsButton>
  );
};
