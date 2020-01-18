import React, { useState } from 'react';
import { Upload, Progress, Button, Icon } from 'antd';
import axios from 'axios';

export default function UploadFileButton() {
  const [defaultFileList, setDefaultFileList] = useState([]);

  const uploadImage = async options => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();

    /*     const config = {
      headers: {
        'access-control-allow-origin': '*',
        'content-type': 'multipart/form-data'
      },
      onUploadProgress: event => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      }
    }; */

    fmData.append('image', file);

    console.log(fmData);

    axios({
      method: 'POST',
      url: `${localStorage.getItem(
        'API_BASE_URL'
      )}/controllers/uploadImage.php`,
      data: fmData
    })
      .then(response => {
        console.log(response);

        onSuccess('Ok');

        console.log('server res: ', response);
      })
      .catch(err => {
        console.log('Error: ', err);

        onError({ err });
      });
  };

  const handleOnChange = ({ file, fileList, event }) => {
    console.log(file, fileList, event);
    //Using Hooks to update the state to the current filelist
    setDefaultFileList(fileList);
    // filelist - [{uid: "-1", url:'Some url to image'}]
  };

  return (
    <div className="container">
      <Upload
        accept="image/*"
        customRequest={uploadImage}
        onChange={handleOnChange}
        listType="picture-card"
        defaultFileList={defaultFileList}
        className="image-upload-grid"
      >
        {defaultFileList.length >= 1 ? null : <div>Upload Button</div>}
      </Upload>
      {/*       {progress > 0 ? <Progress percent={progress} /> : null} */}
    </div>
  );
}
