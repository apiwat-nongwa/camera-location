import Webcam from 'react-webcam'
import { useState, useRef, useCallback } from 'react'

const LiveCamera = () => {
  const webcamRef = useRef(null)
  const [imgSrc, setImgSrc] = useState(null)
  const [msg, setMsg] = useState('')
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
  }

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
  }, [webcamRef])

  return (
    <>
      {msg && <h2>{msg}</h2>}
      <Webcam
        audio={false}
        height={350}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={350}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc} alt="Capture Image" />}
    </>
  )
}

export default LiveCamera
