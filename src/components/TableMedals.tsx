import { Typography } from 'antd'
import Table, { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { MedalType, TotalType } from '../common_types/types'

type TableMedalsType = {
  medals: MedalType[]
}

const TableMedals = ({ medals }: TableMedalsType) => {
  // Create a new date with the addition of the property total
  const newDataMedals = medals.map((medal) => ({
    ...medal,
    total: Object.values(medal.medals).reduce((result, el) => el + result, 0),
  }))

  const columns: ColumnsType<MedalType & TotalType> = [
    {
      title: <Typography.Text strong>Pays</Typography.Text>,
      dataIndex: 'country',
      key: 'country',
      render: (country) => <Typography.Text>{country}</Typography.Text>,
    },

    {
      title: <Typography.Text strong>Or</Typography.Text>,
      dataIndex: 'medals',
      key: 'gold',
      render: (medals) => <Typography.Text>{medals.gold}</Typography.Text>,
      sorter: (a, b) => a.medals.gold - b.medals.gold,
    },
    {
      title: <Typography.Text strong>Argent</Typography.Text>,
      dataIndex: 'medals',
      key: 'silver',
      render: (medals) => <Typography.Text>{medals.silver}</Typography.Text>,
      sorter: (a, b) => a.medals.silver - b.medals.silver,
    },
    {
      title: <Typography.Text strong>Bronze</Typography.Text>,
      dataIndex: 'medals',
      key: 'bronze',
      render: (medals) => <Typography.Text>{medals.bronze}</Typography.Text>,
      sorter: (a, b) => a.medals.bronze - b.medals.bronze,
    },
    {
      title: <Typography.Text strong>Total</Typography.Text>,
      dataIndex: 'total',
      key: 'total',
      render: (total) => <Typography.Text>{total}</Typography.Text>,
      sorter: (a, b) => a.total - b.total,
      defaultSortOrder: 'descend',
    },
  ]
  return (
    <>
      {' '}
      <Typography.Title level={3} style={{ paddingTop: 20, paddingBottom: 20 }}>
        Médailles
      </Typography.Title>
      <Table pagination={false} columns={columns} dataSource={newDataMedals} />
    </>
  )
}

export default TableMedals
