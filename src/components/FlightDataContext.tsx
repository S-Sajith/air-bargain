import { createContext, useState, ReactNode, useContext } from "react";

interface FlightDataContextType {
  flightData: any[];
  setFlightData: (data: any[]) => void;
}

const FlightDataContext = createContext<FlightDataContextType | undefined>(
  undefined
);

const FlightDataProvider = ({ children }: { children: ReactNode }) => {
  const [flightData, setFlightData] = useState<any[]>([]);

  return (
    <FlightDataContext.Provider value={{ flightData, setFlightData }}>
      {children}
    </FlightDataContext.Provider>
  );
};

const useFlightData = () => {
  const context = useContext(FlightDataContext);
  if (!context) {
    throw new Error("useFlightData must be used within a FlightDataProvider");
  }
  return context;
};

export { FlightDataProvider, useFlightData };
