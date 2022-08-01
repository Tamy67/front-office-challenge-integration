import data from '../data.json'
import React from 'react'
import { Divider, Row, Col } from 'antd'
import '../index.css'
import NextEvent from '../components/NextEvent'
import TableMedals from '../components/TableMedals'

const JOPage = () => {
  return (
    <Row justify="center">
      <Col span={18}>
        {' '}
        <NextEvent dataNextEvent={data.nextEvent} />
        <Divider />
      </Col>

      <Col span={18}>
        <TableMedals medals={data.medals} />
      </Col>
    </Row>
  )
}

export default JOPage
