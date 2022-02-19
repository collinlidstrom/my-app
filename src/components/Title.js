import React from 'react'
import date from 'date-and-time';
import {Calendar} from 'rsuite';
import companyLogo from './192.png';


export default function Title(props) {

  const lastModifiedDate = date.format(new Date(), 'MM-DD-YYYY'); // => '02-MM-2015'
  

  const titleStyle = {
    'paddingLeft': '20px'
  }

  return (<div align='center' style={titleStyle}>
    <div align={'left'}>
      <img src={companyLogo} alt=""/>
      <p>Providing small businesses with optimization solutions. We offer products and consulting for efficiency, time management and software solutions.</p>
    </div>
    <p align='right'>
      Today's Date: {lastModifiedDate}&nbsp;&nbsp;
    </p>
    <Calendar hidden/>
  </div>)
}
