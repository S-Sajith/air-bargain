import { useState } from "react";
import axios from "axios";
import { Box, Button } from "@mui/material";
import AirportsCombo from "../components/AirportsCombo";
import DateField from "../components/Datefield";
import { useNavigate } from "react-router";

const HeroPage = () => {
  const baseURL = "https://api.tequila.kiwi.com/v2/search";
  const apiKey = "awhSTq2D_3Bn5Jx9iYMr1QhuHirhStNb";

  const [source, setSource] = useState<any>();
  const [destination, setDestination] = useState<any>();
  const [date, setDate] = useState<any>({
    date_depart: "",
    date_arrive: "",
  });
  // const navigate = useNavigate();

  const handleDateChange = (e: any) => {
    const { name, value } = e.target;
    setDate((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  console.log("source", source);

  const fetchData = async () => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: baseURL,
      headers: { apikey: apiKey },
      params: {
        fly_from: source.IATA,
        fly_to: destination.IATA,
        date_from: date?.date_depart,
        date_to: date?.date_depart,
        return_from: date?.date_return,
        return_to: date?.date_return,
        curr: "INR",
        limit: 50,
        sort: "price",
        max_stopovers: 5,
      },
    };

    try {
      const response = await axios.request(config);
      const flight_data = response.data["data"];
      console.log("flightData", flight_data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#EEEEEE",
          padding: "20px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          gap: "10px",
          borderRadius: "10px",
        }}
      >
        <AirportsCombo setLocation={setSource} label={"From"} />
        <AirportsCombo setLocation={setDestination} label={"To"} />
        <DateField
          label="Departure"
          changeType={handleDateChange}
          name="date_depart"
        />
        <DateField
          label="Return"
          changeType={handleDateChange}
          name="date_return"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          position: "absolute",
          top: "calc(50% + 70px)",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => fetchData()}
          sx={{
            padding: "15px 30px",
            fontSize: "18px",
          }}
        >
          Search
        </Button>
      </Box>
    </>
  );
};

export default HeroPage;
