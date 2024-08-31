import React from 'react'
import styles from './TableRow.module.css'
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin2Line } from "react-icons/ri";
import Image from 'next/image';

const TableRow = ({data,index}) => {
  return (
        <tr>
            <td className={`${styles.column}`}>{index}</td>
            <td className={`${styles.column}`}>{data.name}</td>
            <td className={`${styles.column}`}>{data.description}</td>
            <td className={`${styles.column}`}>{data.price}</td>
            <td className={`${styles.column}`}>{data.priceWithDiscount}</td>
            <td className={`${styles.column}`}>{data.stock}</td>
            <td className={`${styles.column}`}><Image alt={data.name} width={40} height={50} src={data.indexImageUrl}/> </td>
            <td className={`${styles.column}`}><TiEdit /></td>
            <td className={`${styles.column}`}><RiDeleteBin2Line /></td>
        </tr>
  )
}

export default TableRow