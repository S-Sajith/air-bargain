import { useState } from "react";
import axios from "axios";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import AirportsCombo from "../components/AirportsCombo";
import DateField from "../components/Datefield";
import Filler from "../components/Filler";
import logo from "../assets/air-bargain-purple-logo-transparent.png";

interface HeroPageProps {
  darkMode: boolean;
}

const HeroPage = ({ darkMode }: HeroPageProps) => {
  const baseURL = "https://api.tequila.kiwi.com/v2/search";
  const apiKey = "awhSTq2D_3Bn5Jx9iYMr1QhuHirhStNb";

  const [source, setSource] = useState<any>();
  const [destination, setDestination] = useState<any>();
  const [date, setDate] = useState<any>({
    date_depart: "",
    date_arrive: "",
  });

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

  const isXs = useMediaQuery("(max-width:600px)");
  const isMd = useMediaQuery("(max-width:1024px)");

  return (
    <>
      {!isXs && !isMd && (
        <Box
          sx={{
            position: "fixed",
            top: "25%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <img
            src={logo}
            alt="Airplane"
            style={{
              width: "40vw",
            }}
          />
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: darkMode ? "#333333" : "#EEEEEE",
          padding: { xs: "10px", sm: "20px", md: "20px" },
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          gap: "10px",
          borderRadius: "10px",
          width: { xs: "90%", sm: "70%", md: "70vw", lg: "98vw" },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <AirportsCombo setLocation={setSource} label={"From"} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <AirportsCombo setLocation={setDestination} label={"To"} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <DateField
              label="Departure"
              changeType={handleDateChange}
              name="date_depart"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <DateField
              label="Return"
              changeType={handleDateChange}
              name="date_return"
            />
          </Grid>
        </Grid>
        {isXs && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={fetchData}
              sx={{
                padding: "10px 20px",
                fontSize: "12px",
                borderRadius: "10px",
              }}
            >
              Search Flights
            </Button>
          </Box>
        )}
      </Box>
      {!isXs && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            position: "absolute",
            top: {
              sm: "calc(50% + 18vh)",
              md: "calc(50% + 18vh)",
              lg: "calc(50% + 11vh)",
            },
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={fetchData}
            sx={{
              padding: { xs: "10px 20px", sm: "12px 24px", md: "15px 30px" },
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              borderRadius: "10px",
            }}
          >
            Search Flights
          </Button>
        </Box>
      )}
      {!isXs && !isMd && (
        <Box
          sx={{
            position: "absolute",
            bottom: "4vh",
            width: "100%",
          }}
        >
          <Filler darkMode={darkMode} />
        </Box>
      )}
    </>
  );
};

export default HeroPage;
