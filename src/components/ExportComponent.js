import React from 'react'


export default function ExportComponent(props) {

    const titleStyle = {
        'paddingLeft': '20px',
        'border': '10px',
        'borderColor': 'white'
    }

    return (
        <div>
            <br></br>
            <div style={titleStyle}>
                <h4 align='left'>
                    PDF Extract Demo
                </h4>
                <br></br>
                <table>
                    <tr>
                        <div className="mb-3">
                            <label for="formFile" className="form-label">Default file input example</label>
                            <input className="form-control" type="file" id="formFile" />
                            <br></br>
                            <button type="button" className="btn btn-primary">Extract</button>
                        </div>
                    </tr>
                    <tr>
                        <div className="mb-3">
                            <label for="formFileMultiple" className="form-label">Multiple files input example</label>
                            <input className="form-control" type="file" id="formFileMultiple" multiple />
                        </div>
                    </tr>
                    <tr>
                        <div className="mb-3">
                            <label for="formFileDisabled" className="form-label">Disabled file input example</label>
                            <input className="form-control" type="file" id="formFileDisabled" disabled />
                        </div>
                    </tr>
                    <tr>
                        <div className="mb-3">
                            <label for="formFileSm" className="form-label">Small file input example</label>
                            <input className="form-control form-control-sm" id="formFileSm" type="file" />
                        </div>
                    </tr>
                    <tr>
                        <div>
                            <label for="formFileLg" className="form-label">Large file input example</label>
                            <input className="form-control form-control-lg" id="formFileLg" type="file" />
                        </div>
                    </tr>
                </table>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}
