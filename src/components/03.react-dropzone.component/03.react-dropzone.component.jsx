import React, { Component } from "react";
import { render } from "react-dom";

import Dropzone from "react-dropzone";
import request from "superagent";

class DropZone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadFiles: []
        }
    }

    onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
        this.setState({ uploadFiles: [...this.state.uploadFiles, ...acceptedFiles] });
    }

    render() {
        return (
            <div className="text-center mt-5">
                <Dropzone onDrop={this.onDrop}
                    accept="image/png, image/jpg, image/jpeg">
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            Click me to upload a file!
                            <div>
                                <ul>
                                    {
                                        this.state.uploadFiles.map((file, index) => {
                                            console.log("file: " + JSON.stringify(file));
                                            return (<li>{file.name}</li>)
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    )}
                </Dropzone>
            </div>
        );
    }

}
export default DropZone;
//=================================================================
// import './03.react-dropzone.component.scss';

// import React, { useCallback } from 'react'
// import { useDropzone } from 'react-dropzone'

// export default function DropZone() {
//     const onDrop = useCallback(acceptedFiles => {
//         // Do something with the files
//         console.log("file selected!");
//         acceptedFiles.map((file) => {
//             console.log("accepted file:" + file.name + " - " + file.size + " - " + file.path);
//         })

//     }, [])
//     const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

//     return (
//         <div {...getRootProps()} className="drop-zone-wrap">
//             <input {...getInputProps()} />
//             {
//                 isDragActive ?
//                     <p>Drop the files here ...</p> :
//                     <p>Drag 'n' drop some files here, or click to select files</p>
//             }
//         </div>
//     )
// }
//=========================================================
// class DropZone extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     MyDropzone = () => {
//         const onDrop = useCallback(acceptedFiles => {
//             // Do something with the files
//             console.log("file found: " + acceptedFiles);
//         }, [])
//         const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

//         return (
//             <div {...getRootProps()}>
//                 <input {...getInputProps()} />
//                 {
//                     isDragActive ?
//                         <p>Drop the files here ...</p> :
//                         <p>Drag 'n' drop some files here, or click to select files</p>
//                 }
//             </div>
//         )
//     }

//     render() {
//         // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
//         return (
//             <div className="drop-zone-wrap">
//                 This is test dropzone

//                 {/* <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
//                     {({ getRootProps, getInputProps }) => (
//                         <section>
//                             <div {...getRootProps()}>
//                                 <input {...getInputProps()} />
//                                 <p>Drag 'n' drop some files here, or click to select files</p>
//                             </div>
//                         </section>
//                     )}
//                 </Dropzone> */}
//                 {this.MyDropzone()}
//             </div>
//         );
//     }
// }


// export default DropZone;