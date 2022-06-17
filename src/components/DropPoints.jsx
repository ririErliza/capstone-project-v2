import React from 'react';
import { Container, Button} from 'react-bootstrap';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
// import {Icon} from 'leaflet';


const DropPoints = () => {
  return (
    <section id='dp-wrapper'>
    <Container className='px-5 text-center'>
      <h1 className='title-section text-center text-green pb-5'>Drop Points</h1>
      <p className='text-center'> Here you can find the addresses of our drop points where you can drop or send the shoes waste</p>
      
      

          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
      <p className='mt-4 text-center'>See the list of drop points here</p>
      <Button className='dp-button'>Address List</Button>
        

            

       
        



            
    </Container>
    </section>
  )
}

export default DropPoints