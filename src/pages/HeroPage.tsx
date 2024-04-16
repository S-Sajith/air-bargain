import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import AirportsCombo from '../components/AirportsCombo';

const HeroPage = () => {
  const baseURL = "https://api.tequila.kiwi.com/v2/search";
  const apiKey= "awhSTq2D_3Bn5Jx9iYMr1QhuHirhStNb"

  const [source, setSource] = useState<any>();
  const [destination, setDestination] = useState<any>();

  console.log('source', source)

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: baseURL,
        headers: { apikey: apiKey },
        params: {
          fly_from: "BLR", 
          fly_to: 'DEL',
          curr: "INR",
          limit: 50,
          sort: "price",
          max_stopovers: 5
        }
      };

      try {
        const response = await axios.request(config);
        const flight_data = response.data["data"];
        console.log(flight_data);
        // Handle flight_data as needed
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <AirportsCombo setLocation={setSource} label={'From'}/>
      </Box>
    </>
  );
}

export default HeroPage;
