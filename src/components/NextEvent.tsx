import moment from 'moment'
import { NextEventType } from '../common_types/types'
import React, { useEffect, useMemo, useState } from 'react'
import { Card, Empty, Typography, Image, Select, Row, Col, Button } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import '../index.css'

type NextEventList = {
  dataNextEvent: NextEventType[]
}
const COUNT_SLIDES = 3

const NextEvent = ({ dataNextEvent }: NextEventList) => {
  const [sportList, setSportList] = useState<NextEventType[]>([])
  const [selectedSports, setSelectedSports] = useState<string[]>([
    'Aviron - Double',
    'Aviron - Solo',
    'Cyclisme sur route',
    'Badminton - Simple homme',
    'Badminton - double femme',
  ])
  const [index, setIndex] = useState<number>(0)

  // Add default value on page load
  useEffect(() => {
    setSportList(dataNextEvent)
  }, [dataNextEvent])

  // Avoid duplicate function calls with useMemo.
  const filteredList = useMemo(() => {
    // Avoid filter when selectedSports is null
    if (!selectedSports) {
      return sportList
    }
    return sportList
      .filter((item) => selectedSports.includes(item.sportTitle))
  }, [selectedSports, sportList, index])

  useEffect(() => {
    if (filteredList.length > 0 && filteredList.length <= COUNT_SLIDES && index > 0) {
      setIndex((i) => i - COUNT_SLIDES)
    }
  }, [filteredList])
  // Options for select
  const OPTIONS = sportList.map((sport) => ({
    label: sport.sportId,
    value: sport.sportTitle,
    key: sport.id,
  }))

  const filteredOptions = OPTIONS.filter((option) => !selectedSports.includes(option.value))

  // Control btns
  const handleRight = () => {
    if (index + COUNT_SLIDES < sportList.length) {
      setIndex(index + COUNT_SLIDES)
    }
  }

  const handleLeft = () => {
    if (index - COUNT_SLIDES >= 0) {
      setIndex(index - COUNT_SLIDES)
    }
  }

  return (
    <>
      <Select
        placeholder="Sélectionnez des sports"
        mode="multiple"
        showSearch={false}
        size="large"
        value={selectedSports}
        onChange={setSelectedSports}
        style={{ width: '100%', marginTop: 20, marginBottom: 20 }}
      >
        {filteredOptions.map((sport) => {
          const { key, value, label } = sport
          return (
            <Select.Option key={key} value={value} label={label} style={{ width: '100%' }}>
              {value}
            </Select.Option>
          )
        })}
      </Select>

      <Typography.Title level={4} className={'title'}>
        Prochaines épreuves
      </Typography.Title>

      {filteredList && filteredList.length === 0 ? (
        <Empty description={`Aucune épreuve de prévu`} />
      ) : (
        <Row
          gutter={8}
          align="middle"
          wrap={false}
          justify="center"
          style={{ marginTop: 40, marginBottom: 50 }}
        >
          <Button
            shape="circle"
            icon={<LeftOutlined />}
            size="middle"
            onClick={handleLeft}
            className="arrows next"
            disabled={index - COUNT_SLIDES < 0}
          />
            {filteredList
              .filter((_, idx) => idx >= index && idx < index + COUNT_SLIDES)
              .map((sport) => {
            const { sportId, id, sportTitle, pictureUrl, date } = sport
            return (
              <Col span={7} key={sportId}>
                <Card
                  key={id}
                  cover={
                    <Image
                      alt={sportTitle}
                      src={pictureUrl}
                      height={180}
                      width="100%"
                      style={{ objectFit: 'cover' }}
                      preview={false}
                    />
                  }
                >
                  <Card.Meta
                    title={sportTitle}
                    description={moment(+date * 1000).format('DD/MM/YYYY - HH:mm')}
                  />
                </Card>
              </Col>
            )
          })}
          <Button
            shape="circle"
            icon={<RightOutlined />}
            size="middle"
            onClick={handleRight}
            disabled={index + COUNT_SLIDES >= filteredList.length}
            className="arrows prev"
          />
        </Row>
      )}
    </>
  )
}

export default NextEvent
