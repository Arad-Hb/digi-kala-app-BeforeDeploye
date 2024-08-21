import React from 'react'
import styles from './Countries.module.css'
import ReactCountryFlag from "react-country-flag"


const Countries = () => {

const country=[
     {name:'america',url:'US'},
     {name:'iran',url:'IR'},
     {name:'brazil',url:'BR'},
     {name:'turkie',url:'TR'},
     {name:'greece',url:'GR'},
     {name:'france',url:'FR'},
     {name:'italy',url:'IT'},
     {name:'norvey',url:'NO'},
     {name:'afghanistan',url:'AF'},
     {name:'india',url:'IN'},
     {name:'gibuty',url:'GB'},
     {name:'gourgia',url:'GE'}
]
  return (
    <div className={`${styles.container}`}>
       {country.map(item=>{
            return<ReactCountryFlag countryCode={item.url} className={`${styles.icon}`} svg />        
          })}
    </div>
  )
}

export default Countries