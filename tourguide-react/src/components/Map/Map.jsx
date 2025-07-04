import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery, IconButton } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 28.745,
  lng: 77.523,
};

const Map = ({ setBounds, setCoordinates, coordinates, places, setChildClicked }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [hoveredCard, setHoveredCard] = useState(null);
  

  return (
    <div style={{ height: '100%', width: '100%', border: '1px solid black' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCQDLu1Jh-vD_ktEOVUpz5xUSkHuuEbN5k" }}
        center={coordinates}
        defaultZoom={12}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child) } 
      >
        {places?.map((place, i) => {
          const lat = Number(place.latitude);
          const lng = Number(place.longitude);

          if (!isNaN(lat) && !isNaN(lng)) {
            return (
              <div
                lat={lat}
                lng={lng}
                key={i}
                style={{
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                  zIndex: hoveredCard === i ? 10 : 1,
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {isMobile ? (
                  <LocationOnOutlinedIcon color="primary" fontSize="large" />
                ) : (
                  <Paper
                    elevation={3}
                    style={{
                      padding: '10px',
                      width: '150px',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="subtitle2" gutterBottom>
                      {place.name}
                    </Typography>
                    <img
                      src={
                        place.photo
                          ? place.photo.images.large.url
                          : 'https://cdn.profoto.com/cdn/05238cd/globalassets/tips-and-tricks/profoto-c1-plus-food-photography-anders-hannola.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280'
                      }
                      alt={place.name}
                      style={{
                        width: '100%',
                        height: '100px',
                        borderRadius: '5px',
                        objectFit: 'cover',
                      }}
                    />
                    <Rating size="small" value={Number(place.rating)} readOnly />
                  </Paper>
                )}
              </div>
            );
          } else {
            console.warn(`Invalid coordinates for place: ${place.name}`);
            return null;
          }
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
