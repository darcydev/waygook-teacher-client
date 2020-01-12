import React, { useState } from 'react';
import { Upload, Progress, Button, Icon } from 'antd';
import axios from 'axios';

export default function UploadFileButton() {
  const [defaultFileList, setDefaultFileList] = useState([]);
  const [progress, setProgress] = useState(0);

  const uploadImage = async options => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
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
    };
    fmData.append('image', file);
    try {
      const res = await axios.post(
        `${localStorage.getItem('API_BASE_URL')}/uploadImage.php`,
        fmData,
        config
      );

      onSuccess('Ok');
      console.log('server res: ', res);
    } catch (err) {
      console.log('Error: ', err);
      const error = new Error('Some error');
      onError({ err });
    }
  };

  const handleOnChange = ({ file, fileList, event }) => {
    // console.log(file, fileList, event);
    //Using Hooks to update the state to the current filelist
    setDefaultFileList(fileList);
    //filelist - [{uid: "-1",url:'Some url to image'}]
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
      {progress > 0 ? <Progress percent={progress} /> : null}
    </div>
  );
}

{
  /* <Upload
name="picture"
action={`${localStorage.getItem('API_BASE_URL')}/uploadImage.php`}
headers={{
  'Access-Control-Allow-Origin': '*'
}}
withCredentials
listType="picture"
>
<Button>
  <Icon type="upload" />
  Upload
</Button>
</Upload> */
}
