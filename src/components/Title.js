import React from 'react'
import date from 'date-and-time';
import {Calendar, Input, Notification, toaster} from 'rsuite';
import {FaSpinner} from 'react-icons/fa';

export default function Title(props) {

  const name = 'Name';

  const lastModifiedDate = date.format(new Date(), 'MM-DD-YYYY'); // => '02-MM-2015'
  const lastUpdatedBy = 'Lindy'

  const titleStyle = {
    'paddingLeft': '20px'
  }

  const spinnerStyle = {}

  return (<div align='left' style={titleStyle}>
    <h3>under development.</h3>
    <br/>
    <br/>
    <div style={spinnerStyle}>
      <Notification>
        <div style={spinnerStyle} align='left'>
          <strong>last updated:{lastModifiedDate}</strong>
          <br/> {lastUpdatedBy}
        </div>
        <br/>
        <br/>
      </Notification>
    </div>
    <br/>
    <Calendar/>
  </div>)
}
