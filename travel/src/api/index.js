import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: {data} } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
           },
          headers: {
            'X-RapidAPI-Key': '512ae58047msh7560834745a73dfp10b801jsn98ddb9d5c138',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        
        return data;

    } catch(error) {
        console.log(error)

    }
}

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map27.p.rapidapi.com/find', {
        params: { lat: lat , lon: lng },
        headers: {
          'x-rapidapi-key': 'd4a3833ff4msh4e537022200a682p15ff91jsn0907d94f6b13',
          'x-rapidapi-host': 'community-open-weather-map27.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};