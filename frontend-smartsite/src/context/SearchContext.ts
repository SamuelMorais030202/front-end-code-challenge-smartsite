import { createContext } from "react";

type SearchContextType = {
  closed: boolean;
  setClosed: (value : boolean) => void;
  setTrainingPeriod: (value: string) => void;
  trainingPeriod: string;
}

const SearchContext = createContext({} as SearchContextType);

export default SearchContext;