import axios from 'axios'


const GetPlacesData = async (type,ne, sw) => {

  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary` ;

  const options = {
      method: 'GET',
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
      }
  };
  const params = {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
  }
 
  try {
    const { data : {data} } = await axios.request(URL, {...options, params});
    
    return data ;
  } catch (error) {
    console.error(error);
  }
}

export default GetPlacesData ;