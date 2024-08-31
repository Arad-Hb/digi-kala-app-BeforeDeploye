import React from 'react'
import styles from './CustomTable.module.css'
import TableRow from './TableRow'
import TableHeadItem from './TableHeadItem'
import AddProductForm from './AddProductForm'
import CustomDropDown from '../features/CustomDropDown'


const CustomTable = ({item}) => {
    const theadData = ['#','Product Name','Description','Price','Discount','Stock','Image','Edit','Delete']
    const tbodyData=item
      return (
        <div className={`${styles.container}`}>
          <div className={`${styles.addNewProduct}`}>
            <CustomDropDown title={'AddNewProduct'}>
              <AddProductForm/>
            </CustomDropDown>
          </div>
          <table className={`${styles.table}`}>
            <thead className={`${styles.head}`}>
                <tr className={`${styles.headRow}`}>
                    {theadData.map((h) => {
                        return <TableHeadItem key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody className={`${styles.body}`}>
                {tbodyData.map((item,index) => {
                    return <TableRow key={item.id} data={item} index={index} />      
                })}
            </tbody>
        </table>
        </div>
      )
}

export default CustomTable