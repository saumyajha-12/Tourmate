import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const PlaceDetails = ({ place, selected, refProp }) => {

  if(selected) refProp?.current?.scrollIntoView({behaviour: "smooth", block : "start"}) ;

  return (
    <Card sx={{ maxWidth: 500, margin: 'auto', boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="350"
        image={place.photo ? place.photo.images.large.url : "https://cdn.profoto.com/cdn/05238cd/globalassets/tips-and-tricks/profoto-c1-plus-food-photography-anders-hannola.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280"}
        alt={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {place.name}
        </Typography>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Typography variant='subtitle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
        </Box>
        {place.cuisine?.map(({ name }) => (
          <Chip key={name} size='small' label={name} sx={{ marginRight: '4px', marginBottom: '4px' }} />
        ))}
        {place?.address && (
          <Box display={'flex'} justifyContent={'space-between'} alignItems='center'>
            <LocationOnIcon />
            <Typography gutterBottom variant='body2'>{place.address}</Typography>
          </Box>
        )}
        {place?.phone && (
          <Box display={'flex'} justifyContent={'space-between'} alignItems='center'>
            <PhoneIcon />
            <Typography gutterBottom variant='body2'>{place.phone}</Typography>
          </Box>
        )}
      </CardContent>
      <CardActions>
        <Button onClick={() => window.open(place.web_url, '_blank')} size="small" color="primary" variant="contained">
          Trip Advisor
        </Button>
        <Button onClick={() => window.open(place.website, '_blank')} size="small" color="secondary" variant="outlined">
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;

