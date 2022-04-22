import { useState } from 'react'

const LiveLocation = () => {
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)
  const [msg, setMsg] = useState('')

  const getGeoLocation = () => {
    /**
     * @TODO    check current Position & Permission
     *
     */
    if ('geolocation' in navigator) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          setLat(position.coords.latitude)
          setLong(position.coords.longitude)
        })
      } else {
        setMsg('กรุณาเปิดโลเคชั่นบนอุปกรณ์ของท่าน')
      }
    } else {
      setMsg('Geolocation Not Available')
    }
  }
  return (
    <>
      <div style={{ position: 'relative' }}>
        <h3 style={{ textAlign: 'center' }}>Get Geolocation</h3>
        <div>{msg && <h2>{msg}</h2>}</div>
        <div>
          {lat && <>Lat: {lat}</>}
          {long && <>Long: {long}</>}
        </div>
        <div>
          <button onClick={getGeoLocation} style={{ width: '100%' }}>
            Get Location
          </button>
        </div>
      </div>
    </>
  )
}

export default LiveLocation
