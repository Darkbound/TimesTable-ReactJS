import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

import { TimesTable } from "./TimesTable";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <StyledContentLayout>
      <StyledHeader>Header</StyledHeader>
      <Layout>
        <StyledSider width={200}>Sider</StyledSider>
        <StyledContent>
          <TimesTable />
        </StyledContent>
      </Layout>
      <StyledFooter>Footer</StyledFooter>
    </StyledContentLayout>
  );
}

const StyledContent = styled((props) => <Content {...props} />)`
  /* margin: 1rem; */
`;

const StyledContentLayout = styled((props) => <Layout {...props} />)`
  background-color: white;
`;

const StyledHeader = styled((props) => <Header {...props} />)`
  background-color: darkgray;
`;
const StyledFooter = styled((props) => <Footer {...props} />)``;
const StyledSider = styled((props) => <Sider {...props} />)`
  background-color: darkgray;
`;

export default App;
