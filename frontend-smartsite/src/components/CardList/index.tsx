import useDataQuery from "../../hooks/useDataQuery";
// import useSearchContext from "../../hooks/useSearchContext";
import { DataResponseType } from "../../types";
import Card from "../Card";

const CardList = () => {
  const { data } = useDataQuery();
  // const { trainingPeriod, closed } = useSearchContext();

  const list = data?.locations as DataResponseType[] || [];

  console.log(list);

  return (
    <div>
      {
        list.map((item, index) => (
          <Card key={index} {...item} />
        ))
      }
    </div>
  );
};

export default CardList;