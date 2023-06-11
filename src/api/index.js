import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          "X-RapidAPI-Key": "67c524ee1fmsh2e04e8b45bd2ff8p1623acjsne7c933c6eadc",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      "https://community-open-weather-map.p.rapidapi.com/find",
      {
        params: {
          lon: lng,
          lat: lat,
        },
        headers: {
          "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
          "X-RapidAPI-Key": "67c524ee1fmsh2e04e8b45bd2ff8p1623acjsne7c933c6eadc",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
