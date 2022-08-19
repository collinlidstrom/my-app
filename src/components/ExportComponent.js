import React from 'react'
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
                <div id='successAlert' class="alert alert-success" role="alert" hidden>
                    Upload to aws-textract was successful!
                </div>
                <table>
                    <tr>
                        <td>
                            <label for="formFile" className="form-label">Default file input example</label>
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
                    <tr>
                        <td>
                            <h5>Input Functionality Coming Soon</h5>
                        </td><td><Badge />
                        </td>
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
            </div>
            <br />
        </div>
    )
}
