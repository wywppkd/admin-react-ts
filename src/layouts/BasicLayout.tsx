import React, { useState } from 'react';
import { Layout } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import "./BasicLayout.css"

const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

const BasicLayout: React.FC = () => {
  const [collapsed,setCollapsed] =useState(false);
  const toggle = () => {
    console.log("toggle -> toggle")
    setCollapsed(prev => !prev)
  };

  return (
    <Layout style={{height:"100vh"}}>
      <Sider breakpoint="lg" collapsible collapsedWidth="48" collapsed={collapsed}>
        <div className="logo" />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} >
          {React.createElement(collapsed ? MenuFoldOutlined:MenuUnfoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
