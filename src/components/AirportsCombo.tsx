import { Autocomplete, Box, TextField } from "@mui/material";
import IndianAirports from "../common/data/IndianAirports";

const AirportsCombo = (props: any) => {
  const { setLocation, label } = props;

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
        width: { sm: "100%", md: 340 },
        ".MuiOutlinedInput-root": {
          height: "85px",
        },
        ".MuiOutlinedInput-input": {
          fontSize: "30px",
        },
        ".MuiInputLabel-root": {
          fontSize: "28px",
          // marginTop: "5px",
          // marginLeft: "-5px",
          "&.MuiInputLabel-shrink": {
            fontSize: "16px",
            transform: "translate(10px, -9px) scale(1)",
          },
        },
        ".MuiPaper-root-MuiAutocomplete-paper": {
          backgroundColor: "white !important",
          color: "black !important",
        },
        // ".MuiAutocomplete-groupLabel": {
        //   backgroundColor: "grey",
        //   color: "black",
        // },
      }}
      selectOnFocus
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{
            "& > img": { mr: 2, flexShrink: 0 },
            // bgcolor: "lightgray",
            // color: "black",
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
