import React, { useEffect, useState , createRef} from 'react';
import { Typography, FormControl, InputLabel, Select, MenuItem, Box, Grid , CircularProgress } from '@mui/material';
import './List.css'; // Import the CSS file
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places , childClicked, isLoading, setType, type, rating, setRating }) => {
  

  const[elRefs, setElRefs] = useState([]) ;

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i ] || createRef()) ;

    setElRefs(refs) ;
  }, [places]) ;

  // const places = [
  //   {name : "Place A"} ,
  //   {name : "London"} ,
  //   {name : "Delhi"} ,
  //   {name : "Place A"} ,
  //   {name : "London"} ,
  //   {name : "Delhi"} ,
  //   {name : "Place A"} ,
  //   {name : "London"} ,
  //   {name : "Delhi"} ,
    
  // ]

  const handleTypeChange = (event) => {
    setType(event.target.value);
    console.log(event.target) ;
    console.log(event.target.value) ;
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  return (
    <Box  className="container" >
      <Typography variant="h5" color="initial">
        Explore Restaurants, Hotels & Attractions
      </Typography>
      <Box className="form">
      <FormControl sx={{minWidth:"120px"}} size='small' variant='standard' >
        <InputLabel>Type</InputLabel>
        <Select
          value={type}
          onChange={handleTypeChange}
        >
        <MenuItem value="restaurants">Restaurants</MenuItem>
        <MenuItem value="hotels">Hotels</MenuItem>
        <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{minWidth:"120px"}} size='small' variant='standard' >
        <InputLabel>Rating</InputLabel>
        <Select
          value={rating}
          onChange={handleRatingChange} 
        >
         <MenuItem value="all">All</MenuItem> 
        <MenuItem value="above4">Above 4.0</MenuItem>
        <MenuItem value="above3">Above 3.0</MenuItem>
        <MenuItem value="above2">Above 2.0</MenuItem>
        </Select>
      </FormControl>
      </Box>
      
      {isLoading ? (
        <Box className="loadingContainer">
          <CircularProgress />
        </Box>
      ) : (
        <Box className="placesContainer">
          {places?.map((place, index) => (
            <Grid item key={index} ref={elRefs[index]}>
              <PlaceDetails place={place} selected={Number(childClicked) === index} refProp={elRefs[index]} />
            </Grid>
          ))}
        </Box>
      )}

    </Box>
  );
};

export default List;
