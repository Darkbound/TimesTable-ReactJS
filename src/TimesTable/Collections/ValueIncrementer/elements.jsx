import styled, { css } from "styled-components";
import { PlusOutlined, MinusOutlined } from "../../../assets/";
import { Button, Title, Select, Option } from "../../../Components";

export const StyledIncrementsButton = styled((props) => <Button {...props} size="large" />)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const StyledIncrementsButtonTitle = styled(({ currentlySelected, ...props }) => <Title {...props} />)`
  color: ${({ currentlySelected }) => (currentlySelected ? "white" : "black")} !important;
  padding: 0;
  margin: 0 !important;
`;

const PlusMinusStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPlusButton = styled((props) => <Button {...props} size="large" />)`
  ${PlusMinusStyles}
`;

export const StyledMinusButton = styled((props) => <Button {...props} size="large" />)`
  ${PlusMinusStyles}
`;

export const StyledMinusOutlined = styled((props) => <MinusOutlined {...props} />)``;

export const StyledPlusOutlined = styled((props) => <PlusOutlined {...props} />)``;

export const StyledSelect = styled((props) => <Select {...props} />)``;

export const StyledOption = styled((props) => <Option {...props} />)``;

export const StyledTitle = styled((props) => <Title {...props} />)``;
