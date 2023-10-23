import { fetchUnits } from "../services/api";
import { useQuery } from 'react-query';

const useDataQuery = () => {
  const { data, isLoading, isError } = useQuery("data", fetchUnits);
  return { data, isError, isLoading };
}

export default useDataQuery;