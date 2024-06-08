import { useMediaQuery } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function DateField(props: any) {
  let name = props.name;
  let changeType = props.changeType;
  let label = props.label;
  const isXs = useMediaQuery("(max-width:600px)");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        disablePast
        format="DD/MM/YYYY"
        label={label}
        onChange={(date: any) =>
          changeType({
            target: { value: date.format("DD/MM/YYYY"), name: name },
          })
        }
        slotProps={{
          textField: {
            fullWidth: true,
            sx: {
              width: { sm: "100%", md: 340 },
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
              ".legend": {
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: 0.6,
              },
            },
          },
          actionBar: {
            actions: ["accept", "cancel", "clear"],
            sx: {
              "& .MuiButtonBase-root.MuiButton-root": {
                backgroundColor: "#494c7d",
                color: "white",
                fontSize: "10px",
              },
            },
          },
          popper: {
            placement: isXs ? "auto" : "left-start",
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default DateField;
