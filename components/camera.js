import Image from 'next/image'
import Webcam from 'react-webcam'
import { useState, useRef, useCallback } from 'react'

const LiveCamera = () => {
  const webcamRef = useRef(null)
  const [imgSrc, setImgSrc] = useState(null)
  const [msg, setMsg] = useState('')

  const capture = useCallback(() => {
    if (webcamRef.current !== null) {
      const imgSrc = webcamRef.current.getScreenshot()
      setImgSrc(imgSrc)
    } else {
      setMsg('กรุณาเปิดกล้อง')
    }
  }, [webcamRef, setImgSrc])

  return (
    <>
      {msg && <h2>{msg}</h2>}
      <Webcam />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <Image src={imgSrc} alt="Capture Image" />}
    </>
  )
}

export default LiveCamera
