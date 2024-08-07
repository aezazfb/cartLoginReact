import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [fileId, setFileId] = useState('');

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const onTextChange = (e) => {
        //console.log(e.target.value);
         setFileId(e.target.value);
    };

    const onFileUpload = async () => {
        if (!file) {
            setMessage('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:5000/api/files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setFileId(response.data.id);
            setMessage('File uploaded successfully: ' + response.data.fileName);
        } catch (error) {
            setMessage('Error uploading file: ' + error.message);
        }
    };

    const onFileDownload = async () => {
        if (!fileId) {
            setMessage('No file to download.');
            return;
        }

        try {
            const response = await axios.get(`https://localhost:7094/api/Category/download/${fileId}`, {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            let fileNameWithExtension = "file." 
            + response.data.type.split("/")[1]; //File extension from response..
            link.setAttribute('download', fileNameWithExtension);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (error) {
            setMessage('Error downloading file: ' + error.message);
        }
    };

    return (
        <div>
            <h2>File Upload</h2>
            <input type="file" onChange={onFileChange} />
            <input type="text" onChange={onTextChange} />
            <button onClick={onFileUpload}>Upload</button>
            <button onClick={onFileDownload} disabled={!fileId}>Download</button>
            <p>{message}</p>
        </div>
    );
};

export default FileUpload;