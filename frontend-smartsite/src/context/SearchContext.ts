import { createContext } from "react";

type SearchContextType = {
  closed: boolean;
  setClosed: (value : boolean) => void;
  setTrainingPeriod: (value: string) => void;
  trainingPeriod: string;
  numberOfUnits: number;
  setNumberOfUnits: (value : number) => void;
}

const SearchContext = createContext({} as SearchContextType);

export default SearchContext;