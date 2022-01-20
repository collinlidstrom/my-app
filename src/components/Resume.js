import React from 'react'
import { useState } from 'react';
import { Input } from 'rsuite';
import { Calendar } from 'rsuite';
// import { Input } from './Input'
export default function Resume(props) {
    const name = 'Name';
    return (
        <div>
            <h3>Strebin Estate Vineyards</h3>
            <div class="row">
                <div>
                </div>
            </div>
            <br />
            <Calendar />
            <div class="col-lg-4 col-lg-offset-4">
                <div class="input-group">
                    <Input field={name} placeholder={"First Name"} />
                    <Input field={name} placeholder={"Last Name"} />
                    <Input field={name} placeholder={"Address"} />
                </div>
            </div>
        </div>
    )
}
