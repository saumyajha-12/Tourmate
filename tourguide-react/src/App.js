import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Grid from '@mui/material/Grid'
import Map from './components/Map/Map'
import List from './components/List/List'

import   GetPlacesData  from './api/GetPlacesData'

const App = () => {
  const [places, setPlaces] = useState([]) ;
  const [coordinates, setCoordinates] = useState({}) ;
  const [bounds, setBounds] = useState(null) ;
  const [childClicked, setChildClicked] = useState(null) ;

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [isLoading, setLoading] = useState(false) ;

  useEffect(() => {
  
     navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
       setCoordinates( {lat: latitude, lng: longitude} ) ;
     })
  },[])

  useEffect(() => {
    // console.log(bounds) ;
    setLoading(true) ;
    if(bounds ) {

      GetPlacesData(type,bounds.ne, bounds.sw)
      .then ((data) => {
         console.log("Restaurants : " , data) ;
         setPlaces(data) ;
         setLoading(false) ;
      } )

      
    }
    
  }, [ bounds, coordinates, type ])

  return (
    <>
    <Header />
    <Grid container spacing={3} sx={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List 
            places = {places}  
            childClicked = {childClicked} 
            isLoading={isLoading}
            type={type} 
            setType = {setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid> 
        <Grid item sx={{height:'90vh'}} xs={12} md={8}>
          <Map 
            setCoordinates = {setCoordinates}
            setBounds = {setBounds} 
            coordinates = {coordinates}
            places = {places} 
            setChildClicked = {setChildClicked} 
          />
        </Grid>      
    </Grid>
    </>
  )
}

export default App