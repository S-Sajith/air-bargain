import { useFlightData } from "../components/FlightDataContext";

interface SearchResultsProps {
  darkMode: boolean;
}

const SearchResults = ({ darkMode }: SearchResultsProps) => {
  const { flightData } = useFlightData();
  return <div>SeachResults</div>;
};

export default SearchResults;
