import React from 'react'
import date from 'date-and-time';
import {Calendar, Notification} from 'rsuite';

export default function Title(props) {

  const lastModifiedDate = date.format(new Date(), 'MM-DD-YYYY'); // => '02-MM-2015'
  const lastUpdatedBy = <a href='https://www.linkedin.com/in/collinlidstrom/'>
    Lindy
  </a>

  // patch notes comment to display on page for updates
  const patchNotes = ' - added light / dark theme bar for account settings'

  const titleStyle = {
    'paddingLeft': '20px'
  }

  const spinnerStyle = {}

  return (<div align='center' style={titleStyle}>
    <h2>under development.</h2>
    <br/>
    <div style={spinnerStyle}>
      <Notification>
        <div style={spinnerStyle} align='center'>
          <strong>last update on {lastModifiedDate}&nbsp; by
          </strong>&nbsp; {lastUpdatedBy}
          <br/>
          <div style={titleStyle}>
            {patchNotes}
          </div>
        </div>
      </Notification>
    </div>
    <br/>
    <Calendar/>
  </div>)
}
