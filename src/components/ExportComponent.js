import React from 'react'


export default function ExportComponent(props) {

    const titleStyle = {
        'paddingLeft': '20px',
        'border' : '1px',
        'borderColor' : 'white'
    }

    return (
        <div>
            <br></br>
            <div align='center' style={titleStyle}>
                <h4 align='left'>
                    PDF Extract Demo
                </h4>
                <br></br>
                <div className="mb-6">
                    <label for="formFile" className="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="mb-3">
                    <label for="formFileMultiple" className="form-label">Multiple files input example</label>
                    <input className="form-control" type="file" id="formFileMultiple" multiple />
                </div>
                <div className="mb-3">
                    <label for="formFileDisabled" className="form-label">Disabled file input example</label>
                    <input className="form-control" type="file" id="formFileDisabled" disabled />
                </div>
                <div className="mb-3">
                    <label for="formFileSm" className="form-label">Small file input example</label>
                    <input className="form-control form-control-sm" id="formFileSm" type="file" />
                </div>
                <div>
                    <label for="formFileLg" className="form-label">Large file input example</label>
                    <input className="form-control form-control-lg" id="formFileLg" type="file" />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}
