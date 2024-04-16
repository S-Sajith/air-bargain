import { Autocomplete, Box, TextField } from "@mui/material"
import IndianAirports from "../common/data/IndianAirports"

const AirportsCombo = (props:any) => {

    const { setLocation, label} = props

    const handleLocationChange = (event: any, value: any) => {
        setLocation(value); 
    };

  return (
    <Autocomplete
      id="locations"
      sx={{ width: 300 }}
      options={IndianAirports}
      autoHighlight
      getOptionLabel={(option) => option.location}
      groupBy={(option) => option.state}
      onChange={handleLocationChange}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
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
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
        />
      )}
    />
  )
}

export default AirportsCombo