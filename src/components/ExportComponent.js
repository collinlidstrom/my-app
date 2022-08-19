import React from 'react'
import "bootstrap"
import { Badge } from 'rsuite'


export default function ExportComponent(props) {

    const titleStyle = {
        'paddingLeft': '20px',
        'border': '10px',
        'borderColor': 'white'
    }

    function processUpload() {
        console.log('\n')
        console.log('processing file upload')
        console.log('uploading file to aws s3 bucket')
        console.log('file upload successful.\n')
        document.getElementById('successAlert').hidden = false;
    }

    return (
        <div>
            <br />
            <div style={titleStyle}>
                <h4 align='left'>
                    PDF Extract Demo
                </h4>
                <br />
                <div id='successAlert' className="alert alert-success" role="alert" hidden>
                    Upload to aws-textract was successful!
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="formFile" className="form-label">Default file input example</label>
                                <input className="form-control" type="file" id="formFile" />
                                <br />
                                <br />
                                <button id='submitClicked' type="button" className="btn btn-primary" onClick={processUpload}>Extract</button>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <figure className="figure">
                                    <img src="logo192.png" className="figure-img img-fluid rounded" alt="..." />
                                    <figcaption className="figure-caption text-end">A caption for the above image.</figcaption>
                                </figure>
                            </td>
                        </tr>
                        <tr><td><h5>Input Functionality Coming Soon</h5></td><td><Badge /></td>
                        </tr>
                    </tbody>
                </table>
                <label htmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
                <input className="form-control" type="file" id="formFileMultiple" multiple />
                <label htmlFor="formFileDisabled" className="form-label">Disabled file input example</label>
                <input className="form-control" type="file" id="formFileDisabled" disabled />
                <label htmlFor="formFileSm" className="form-label">Small file input example</label>
                <input className="form-control form-control-sm" id="formFileSm" type="file" />
                <label htmlFor="formFileLg" className="form-label">Large file input example</label>
                <input className="form-control form-control-lg" id="formFileLg" type="file" />
            </div>
        </div>
    )
}
