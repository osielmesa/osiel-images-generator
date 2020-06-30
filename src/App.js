import React from 'react';
import 'antd/dist/antd.css';
import './App.css';

import { Layout } from 'antd';
import Home from './modules/Home/Home';
const { Header, Content, Footer } = Layout;

const styles = {
  title: {
    color: 'white'
  },
  content: {
    padding: '0 50px',
    marginTop: 20
  },
  footer: {
    textAlign: 'center'
  }
}

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" ></div>
        <h2 style={styles.title}>Images generator</h2>
      </Header>
      <Content style={styles.content}>
        <Home />
      </Content>
      <Footer style={styles.footer}>Osiel Lima ©2020 Created for instruction purposes about redux-saga</Footer>
    </Layout>
  );
}

export default App;
