import styled from "styled-components";
import { Select } from "antd";

const { Option } = Select;

export const StyledSelect = styled((props) => <Select {...props} />)``;

export const StyledOption = styled((props) => <Option {...props} />)``;
