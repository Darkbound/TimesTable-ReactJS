import styled from "styled-components";
import { Button } from "antd";

export const StyledRoundedBlockButton = styled((props) => <Button {...props} shape="round" block />)`
  border-radius: 15px;
`;
