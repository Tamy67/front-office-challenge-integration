import moment from 'moment'
import { NextEventType } from '../common_types/types'
import React, { CSSProperties, useEffect, useMemo, useState } from 'react'
import { Card, Empty, Typography, Image, Select, Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import '../index.css'

type NextEventList = {
  dataNextEvent: NextEventType[]
}

type PropsArrowsType = {
  className?: string
  style?: React.CSSProperties
  onClick?: (e: any) => void
}

const styleBtns: CSSProperties = {
  color: 'grey',
  fontSize: 16,
  lineHeight: '1.5715',
  height: 30,
  width: 30,
  border: `1px solid grey`,
  borderRadius: 60,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
  position: 'absolute',
  top: '50%',
  margin: '-30px 0 0 0',
  background: 'white',
  cursor: 'pointer',
}

const SamplePrevArrow = (props: PropsArrowsType) => {
  const { className, onClick } = props
  return (
    <div className={className} style={styleBtns} onClick={onClick}>
      <LeftOutlined />
    </div>
  )
}

const SampleNextArrow = (props: PropsArrowsType) => {
  const { className, onClick } = props
  return (
    <div className={className} style={styleBtns} onClick={onClick}>
      <RightOutlined />
    </div>
  )
}

const NextEvent = ({ dataNextEvent }: NextEventList) => {
  const [sportList, setSportList] = useState<NextEventType[]>([])
  const [selectedSports, setSelectedSports] = useState<string[]>([
    'Aviron - Double',
    'Aviron - Solo',
    'Cyclisme sur route',
    'Badminton - Simple homme',
    'Badminton - double femme',
  ])

  // Add default value on page load
  useEffect(() => {
    setSportList(dataNextEvent)
  }, [dataNextEvent])

  // Function to get filtered list
  const getFilteredList = () => {
    // Avoid filter when selectedSports is null
    if (!selectedSports) {
      return sportList
    }
    return sportList.filter((item) => selectedSports.includes(item.sportTitle))
  }

  // Avoid duplicate function calls with useMemo.
  const filteredList = useMemo(getFilteredList, [selectedSports, sportList])

  // Options for select
  const OPTIONS = sportList.map((sport) => ({
    label: sport.sportId,
    value: sport.sportTitle,
    key: sport.id,
  }))

  const filteredOptions = OPTIONS.filter((option) => !selectedSports.includes(option.value))

  const settings = {
    slidesToScroll: 3,
    slidesToShow: 3,
    arrows: true,
    infinite: false,
    dots: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  }

  return (
    <>
      <Select
        placeholder="Sélectionnez des sports"
        mode="multiple"
        value={selectedSports}
        onChange={setSelectedSports}
        style={{ width: '100%', marginTop: 20, marginBottom: 20 }}
      >
        {filteredOptions.map((sport) => {
          const { key, value, label } = sport
          return (
            <Select.Option key={key} value={value} label={label} style={{ width: '100%' }}>
              <Typography.Text>{value}</Typography.Text>
            </Select.Option>
          )
        })}
      </Select>

      <Typography.Title level={3}>Prochaines épreuves</Typography.Title>
      {filteredList && filteredList.length === 0 ? (
        <Empty description={`Aucune épreuve de prévu`} />
      ) : (
        <Carousel {...settings}>
          {filteredList.map((sport) => {
            const { sportId, sportTitle, pictureUrl, date } = sport
            return (
              <Card
                key={sportId}
                cover={
                  <Image
                    alt={sportTitle}
                    src={pictureUrl}
                    height={220}
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
            )
          })}
        </Carousel>
      )}
    </>
  )
}

export default NextEvent
