import { useEffect } from 'react';
import axios from 'axios';

const HeroPage = () => {
  const baseURL = "https://api.tequila.kiwi.com/v2/search";
  // const baseURL = 'https://api.tequila.kiwi.com/v2/search?fly_from=DEL&fly_to=BLR&date_from=26%2F03%2F2024&date_to=28%2F03%2F2024&curr=INR&limit=50&sort=price&max_stopovers=5';
  // const apiKey = 'PEQLsHiSJQbj8TF_3bq_LoWs_6KAFlZ4';
  const apiKey= "vb7k5k8Jl7UkJim2ICfKSy77b3B0UVKY"

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
    <div>HeroPage</div>
  );
}

export default HeroPage;
