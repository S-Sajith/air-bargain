import { Autocomplete, Box, TextField, useMediaQuery } from "@mui/material";
import IndianAirports from "../common/data/IndianAirports";

const AirportsCombo = (props: any) => {
  const { setLocation, label } = props;
  const isXs = useMediaQuery("(max-width:600px)");

  const handleLocationChange = (event: any, value: any) => {
    if (value) {
      setLocation(value);
    }
  };

  return (
    <Autocomplete
      id="locations"
      options={IndianAirports}
      autoHighlight
      getOptionLabel={(option) => option.location}
      groupBy={(option) => option.state}
      onChange={handleLocationChange}
      sx={{
        width: { xs: "100%", md: 340 },
        ".MuiOutlinedInput-root": {
          height: isXs ? "68px" : "85px",
        },
        ".MuiOutlinedInput-input": {
          fontSize: isXs ? "24px" : "30px",
        },
        ".MuiInputLabel-root": {
          fontSize: isXs ? "22.4px" : "28px",
          "&.MuiInputLabel-shrink": {
            fontSize: isXs ? "11.2px" : "14px",
            transform: isXs
              ? "translate(12px, -7px) scale(1)"
              : "translate(12px, -9px) scale(1)",
          },
        },
        ".MuiPaper-root-MuiAutocomplete-paper": {
          backgroundColor: "white !important",
          color: "black !important",
        },
      }}
      selectOnFocus
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{
            "& > img": { mr: 2, flexShrink: 0 },
          }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            srcSet={`https://img.icons8.com/office/16/airport.png`}
            src={`https://img.icons8.com/office/16/airport.png`}
            alt=""
          />
          {option.location} ({option.IATA})
        </Box>
      )}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default AirportsCombo;
