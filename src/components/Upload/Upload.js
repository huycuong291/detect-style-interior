
import React, { useState } from "react";
import { useEffect } from "react";
import DropFileInput from "../drop-file-input/DropFileInput";
import DetectAndShow from "./DetectAndShow/DetectAndShow";
import './styles.css'
import axios from "axios";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { Skeleton } from 'antd';

function UploadFile() {
  const [listImageBase64, setListImageBase64] = useState([]);
  const [listImage, setListImage] = useState([])
  const [dataResponse, setDataResponse] = useState([])
  const [isDetected, setDetected] = useState(false)

  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)


  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  useEffect(async () => {
    let temp = []
    for (let i = 0; i < listImage.length; i++) {
      temp.push(await convertBase64(listImage[i]))
    }
    temp = [...temp, ...listImageBase64]
    setListImageBase64(temp);
  }, [listImage])

  const uploadAndDetect = () => {
    setIsError(false)
    setLoading(true)
    listImageBase64.length ? listImageBase64.forEach(item => {
      axios.post("https://interior-object-detect-backend-production.up.railway.app/detect", { base64: item }).then(function (response) {
        console.log(response)
        if (response.data !== "ERROR") {
          setDetected(true)
          setLoading(false)
          const arrResponse = Object.keys(response.data).map((key) => response.data[key]);
          setDataResponse([...arrResponse])
        }
        else {
          setDetected(true)
          setLoading(false)
          setIsError(true)
        }
      })
    }) : setLoading(false)

    setListImageBase64([])
    setListImage([])
  }
  const fileChangeHandle = async (files) => {
    setIsError(false)
    await setListImage(files)
    setDetected(false)
  }
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: "#FCA61F"
      }}
      spin
    />
  );

  return (
    <>
      <div className="main-upload" id="main-upload" style={{backgroundColor:darkMode&& "lightslategrey"}}>
        <span style={{ color: darkMode ? 'white' : '' }}>Upload image file</span>
        <span>And Detect Now!</span>
        <div className="box-upload">
          <DropFileInput
            onFileChange={fileChangeHandle}
            isDetected={isDetected}
          />
          {loading ? <>
            <Skeleton
              active
              avatar
              paragraph={{
                rows: 4,
              }} />
          </>
            :
            <>
              {isError && <p style={{ marginTop: "50px", fontSize: "24px", color: "red", fontWeight: "bold" }}>No object detected</p>}
              <button className="button i-button" onClick={uploadAndDetect}>Upload and detect</button>
            </>}
        </div>
      </div>

      {isDetected && !isError && <DetectAndShow darkMode={darkMode} data={dataResponse}></DetectAndShow>}

    </>
  );
}
export default UploadFile;
