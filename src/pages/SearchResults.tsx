import { Container, Fab, Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useFlightData } from "../components/FlightDataContext";
import { useNavigate } from "react-router-dom";
import FlightDeal from "../components/FullSize/FlightDeal";
import ResultBox from "../components/FullSize/ResultBox";
import MobileFlightNotFound from "../components/Mobile/MobileFlightNotFound";
import MobileResultBox from "../components/Mobile/MobileResultBox";
import MobileResultDeals from "../components/Mobile/MobileResultDeals";
import MobileTicket from "../components/Mobile/MobileTicket";
import { useRef } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface SearchResultsProps {
  darkMode: boolean;
}

const SearchResults = ({ darkMode }: SearchResultsProps) => {
  const { flightData } = useFlightData();
  const navigate = useNavigate();
  console.log("flightData", flightData);
  const index = flightData.map((_, i) => i);
  const gridRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (gridRef.current) {
      gridRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const scrollableDivRef = useRef<HTMLDivElement>(null);

  // Function to scroll to top
  const scrollToTop2 = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <section
        style={{
          display: { xs: "block", md: "none" } as any,
        }}
      >
        <Container
          sx={{
            pt: 2,
            pb: 2,
            pl: 4,
            pr: 4,
            display: {
              xs: "block",
              md: "none",
              backgroundColor: darkMode ? "#333333" : "#EEEEEE",
            },
          }}
        >
          {flightData.length != 0 ? (
            <MobileResultBox flight={flightData} darkMode={darkMode} />
          ) : (
            <></>
          )}
        </Container>

        {flightData.length != 0 ? (
          <Container
            sx={{
              display: { xs: "block", md: "none" },
              pb: 1,
            }}
          >
            {flightData.length != 0 ? (
              <MobileResultDeals flight={flightData} />
            ) : (
              <></>
            )}
            <div
              ref={scrollableDivRef}
              style={{
                overflowY: "auto",
                scrollbarWidth: "thin",
                height: "68vh",
              }}
            >
              {index?.map((i) => {
                if (flightData.length === 0) {
                  return <h1 key={i}>No flights found</h1>;
                } else {
                  var flight = flightData[i];
                  return (
                    <MobileTicket
                      key={i}
                      flight={flight}
                      index={i}
                      darkMode={darkMode}
                    />
                  );
                }
              })}
              <Fab
                color="primary"
                aria-label="scroll-to-top"
                sx={{
                  position: "fixed",
                  bottom: "10vh",
                  right: "4vw",
                  display: "block",
                }}
                onClick={scrollToTop2}
              >
                <KeyboardArrowUpIcon />
              </Fab>
            </div>
          </Container>
        ) : (
          <MobileFlightNotFound />
        )}
      </section>

      <section>
        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            position: "absolute",
            top: 45,
            left: 10,
            backgroundColor: darkMode ? "#333333" : "#EEEEEE",
            color: darkMode ? "#fff" : "#000",
            "&:hover": {
              backgroundColor: darkMode ? "#555" : "#f0f0f0",
            },
            borderRadius: "50%",
            padding: 1,
            display: { xs: "none", md: "flex" },
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Container fixed>
          <>
            <Grid container sx={{ mt: 2, display: { xs: "none", md: "flex" } }}>
              <Grid item xs={4}>
                {flightData.length === 0 ? (
                  <></>
                ) : (
                  <ResultBox
                    flight={flightData}
                    index={index}
                    darkMode={darkMode}
                  />
                )}
              </Grid>
              <Grid
                item
                xs={8}
                ref={gridRef}
                sx={{
                  paddingInline: "2%",
                  paddingBlock: "2%",
                  height: "90vh",
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                  "&::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    boxShadow: "inset 0 0 6px rgba(0,0,0,0.1)",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: darkMode ? "#888" : "#aaa",
                    borderRadius: "10px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: darkMode ? "#555" : "#888",
                  },
                }}
              >
                {index?.map((i: any) => {
                  console.log(flightData);
                  if (flightData.length === 0) {
                    return <h1 key={i}>No flights found</h1>;
                  } else {
                    var flight = flightData[i];
                    return (
                      <FlightDeal
                        key={i}
                        index={i}
                        flight={flight}
                        darkMode={darkMode}
                      />
                    );
                  }
                })}

                <Fab
                  color="primary"
                  aria-label="scroll-to-top"
                  sx={{
                    position: "fixed",
                    bottom: "5vh",
                    right: "13vw",
                    display: "block",
                  }}
                  onClick={scrollToTop}
                >
                  <KeyboardArrowUpIcon />
                </Fab>
              </Grid>
            </Grid>
          </>
        </Container>
      </section>
    </div>
  );
};

export default SearchResults;
