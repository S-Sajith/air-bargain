import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import AirportsCombo from "../components/AirportsCombo";
import DateField from "../components/Datefield";

const HeroPage = () => {
  const baseURL = "https://api.tequila.kiwi.com/v2/search";
  const apiKey = "awhSTq2D_3Bn5Jx9iYMr1QhuHirhStNb";

  const [source, setSource] = useState<any>();
  const [destination, setDestination] = useState<any>();
  const [date, setDate] = useState<any>({
    date_from: "",
    date_to: "",
  });

  const handleDateChange = (e: any) => {
    const { name, value } = e.target;
    setDate((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  console.log("source", source);

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: source,
        maxBodyLength: Infinity,
        url: baseURL,
        headers: { apikey: apiKey },
        params: {
          fly_from: source.IATA,
          fly_to: destination.IATA,
          date_from: date?.date_from,
          date_to: date?.date_to,
          curr: "INR",
          limit: 50,
          sort: "price",
          max_stopovers: 5,
        },
      };

      try {
        const response = await axios.request(config);
        const flight_data = response.data["data"];
        console.log(flight_data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [source, destination, date]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "grey",
          padding: "20px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          gap: "10px",
        }}
      >
        <AirportsCombo setLocation={setSource} label={"From"} />
        <AirportsCombo setLocation={setDestination} label={"To"} />
        <DateField
          label="Departure"
          changeType={handleDateChange}
          name="date_from"
        />
        <DateField
          label="Return"
          changeType={handleDateChange}
          name="date_to"
        />
      </Box>
    </>
  );
};

export default HeroPage;
