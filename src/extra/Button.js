import React from 'react'
import { useState } from 'react';
import { Input } from '../../../react-resources/Input'
export default function Button(props) {

    const [name, setName] = useState('Looking for something?')

    if (name === 'Experience') {
        setName('Expertise');
    }

    return (
        <div>
            <h1>Resume</h1>
            <Input name={name} />
        </div>
    )
}