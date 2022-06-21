import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {location} from './data/info'

console.log(location)

function App() {
  return (
    <div>
      <h1>Api google map</h1>
      <LoadScript googleMapsApiKey=''>
        <GoogleMap
          mapContainerStyle={{height :`700px`, width: `100%`}}
          center={{ lat: 46.862725, lng: 2.287592 }}
          zoom={6}
        >
          {location.map((info)=>(
            <Marker
              key={info.id}
              position={{lat: info.lat, lng: info.lng}}
              title={info.city}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
    
  );
}
export default App;
