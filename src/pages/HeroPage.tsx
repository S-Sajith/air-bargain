import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";
import AirportsCombo from "../components/AirportsCombo";
import DateField from "../components/Datefield";
import Filler from "../components/Filler";
import logo from "../assets/air-bargain-purple-logo-transparent.png";
import { useNavigate } from "react-router";
import { useFlightData } from "../components/FlightDataContext";
import { isAfter, parse } from "date-fns";

interface HeroPageProps {
  darkMode: boolean;
}

interface SnackbarState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error";
}

const HeroPage = ({ darkMode }: HeroPageProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState<any>();
  const [destination, setDestination] = useState<any>();
  const [date, setDate] = useState<any>({
    date_from: "",
    date_to: "",
  });
  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "error",
  });
  const { setFlightData } = useFlightData();
  const isXs = useMediaQuery("(max-width:600px)");
  const isMd = useMediaQuery("(max-width:1024px)");

  const handleDateChange = (e: any) => {
    const { name, value } = e.target;
    setDate((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const fetchData = async () => {
    if (!source) {
      setSnackbarState({
        open: true,
        message: "Please select a source airport.",
        severity: "warning",
      });
      return;
    }

    if (!destination) {
      setSnackbarState({
        open: true,
        message: "Please select a destination airport.",
        severity: "warning",
      });
      return;
    }

    if (source.IATA === destination.IATA) {
      setSnackbarState({
        open: true,
        message: "Source and destination cannot be the same.",
        severity: "warning",
      });
      return;
    }

    if (!date.date_from || !date.date_to) {
      setSnackbarState({
        open: true,
        message: "Please select both 'From' and 'To' dates.",
        severity: "warning",
      });
      return;
    }

    const dateFrom = parse(date.date_from, "dd/MM/yyyy", new Date());
    const dateTo = parse(date.date_to, "dd/MM/yyyy", new Date());

    if (isAfter(dateFrom, dateTo)) {
      setSnackbarState({
        open: true,
        message: "To date cannot be before from date",
        severity: "warning",
      });
      return;
    }

    setLoading(true);

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_APP_API_URL,
      headers: { apikey: import.meta.env.VITE_APP_API_KEY },
      params: {
        fly_from: source?.IATA,
        fly_to: destination?.IATA,
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
      setFlightData(flight_data);

      if (flight_data.length === 0) {
        setSnackbarState({
          open: true,
          message: "Flight data not found",
          severity: "warning",
        });
      } else {
        navigate("/searchResults");
      }
    } catch (error: any) {
      setSnackbarState({
        open: true,
        message: error.response.data.error,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarState((prev) => ({ ...prev, open: false }));
  };

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
              label="Search from"
              changeType={handleDateChange}
              name="date_from"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <DateField
              label="Search to"
              changeType={handleDateChange}
              name="date_to"
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
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "Search Flights"
              )}
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
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Search Flights"
            )}
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
      <Snackbar
        open={snackbarState.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarState.severity}
          sx={{ width: "100%" }}
        >
          {snackbarState.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default HeroPage;
