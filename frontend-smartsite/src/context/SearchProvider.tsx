import { useMemo, useState } from "react";
import SearchContext from "./SearchContext";

type SearchProviderProps = {
  children: React.ReactNode;
}

const SearchProvider = ({ children } : SearchProviderProps) => {
  const [trainingPeriod, setTrainingPeriod] = useState('');
  const [closed, setClosed] = useState<boolean>(false);
  const [numberOfUnits, setNumberOfUnits] = useState<number>(0);

  const value = useMemo(() => ({
    trainingPeriod,
    setTrainingPeriod,
    closed,
    setClosed,
    numberOfUnits,
    setNumberOfUnits,
  }), [trainingPeriod, setTrainingPeriod, closed, setClosed, numberOfUnits]);

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider;