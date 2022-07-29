import JOPage from './view/JOPage'
import React from 'react'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

const App = () => {
  return (
    <Layout>
      <Header
        style={{
          background: '#d9d9d9',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        JO 2020
      </Header>
      <Content>
        <JOPage />
      </Content>
      <Footer />
    </Layout>
  )
}

export default App
