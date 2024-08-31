import React from 'react'
import styles from './TableRow.module.css'

const TableHeadItem = ({item}) => {
  return (
      <td title={item} className={`${styles.column}`}>{item}</td>
  )
}

export default TableHeadItem