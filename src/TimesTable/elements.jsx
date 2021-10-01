import styled from "styled-components";
import { Row, Col } from "antd";
import { Chart, ColorPicker, ChartStateControls, Controls, Presets } from "./Collections";

export const StyledRow = styled((props) => <Row {...props} />)``;

export const StyledCol = styled((props) => <Col {...props} />)``;

export const StyledChart = styled((props) => <Chart {...props} />)``;

export const StyledColorPicker = styled((props) => <ColorPicker {...props} />)``;

export const StyledChartStateControls = styled((props) => <ChartStateControls {...props} />)``;

export const StyledControls = styled((props) => <Controls {...props} />)``;

export const StyledPresets = styled((props) => <Presets {...props} />)``;
