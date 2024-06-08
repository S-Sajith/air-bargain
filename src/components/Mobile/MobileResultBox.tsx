/* eslint-disable react/prop-types */

import { Grid, IconButton, Typography } from "@mui/material";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";

function MobileResultBox(props: any) {
  let departure = props.flight[0]["cityFrom"];
  let arrival = props.flight[0]["cityTo"];

  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: props.darkMode ? "#1e1e1e" : "white",
          borderRadius: "0.5em",
          pt: 2,
          pb: 2,
          pr: 0,
        }}
      >
        <Grid
          item
          xs={10}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {departure}{" "}
            <IconButton disabled size="small">
              <CompareArrowsRoundedIcon
                sx={{
                  color: "var(--text)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </IconButton>{" "}
            {arrival}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default MobileResultBox;
