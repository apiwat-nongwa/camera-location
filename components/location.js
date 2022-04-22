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
          console.log(position)
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
        <h3>Get Geolocation</h3>
        <div>{msg && <h2>{msg}</h2>}</div>
        <div>
          <button onClick={getGeoLocation} style={{ width: '100%' }}>
            Location
          </button>
        </div>
      </div>
    </>
  )
}

export default LiveLocation
