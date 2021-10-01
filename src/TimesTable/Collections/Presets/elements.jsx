import styled from "styled-components";

import { Col, Row, RadioGroup, RadioButton, Space, Title } from "../../../Components";

export const StyledTitle = styled((props) => <Title {...props} />)``;

export const StyledCol = styled((props) => <Col {...props} />)``;

export const StyledRow = styled((props) => <Row {...props} />)``;

export const StyledVerticalSpace = styled((props) => <Space {...props} direction="vertical" />)``;

export const StyledRadioGroup = styled((props) => <RadioGroup {...props} size="small" />)``;

export const StyledRadioButton = styled((props) => <RadioButton {...props} />)`
  width: 110px;
  border: 2px solid !important;
`;

export const StyledRadioButtonColorPreset = styled(({ lineColor, fillColor, ...props }) => (
  <StyledRadioButton {...props} />
))`
  border: ${({ lineColor }) => "2px solid " + lineColor.toLowerCase()} !important;
  background-color: ${({ fillColor }) => fillColor.toLowerCase()};
  color: ${({ lineColor }) => lineColor.toLowerCase()};
`;
