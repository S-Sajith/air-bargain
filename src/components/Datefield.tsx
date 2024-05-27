import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function DateField(props: any) {
  let name = props.name;
  let changeType = props.changeType;
  let label = props.label;

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
                height: "85px",
              },
              ".MuiOutlinedInput-input": {
                fontSize: "30px",
              },
              ".MuiInputLabel-root": {
                fontSize: "28px",
                "&.MuiInputLabel-shrink": {
                  fontSize: "16px",
                  transform: "translate(10px, -9px) scale(1)",
                },
              },
              ".legend": {
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: 0.6,
              },
              ".MuiPaper-root-MuiAutocomplete-paper": {
                backgroundColor: "white !important",
                color: "black !important",
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default DateField;
