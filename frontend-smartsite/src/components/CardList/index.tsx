import { useEffect } from "react";
import useDataQuery from "../../hooks/useDataQuery";
import useSearchContext from "../../hooks/useSearchContext";
import { DataResponseType } from "../../types";
import Card from "../Card";
import styled from './cardList.module.css';

const CardList = () => {
  const { data } = useDataQuery();
  const { trainingPeriod, closed } = useSearchContext();

  const list = data?.locations as DataResponseType[] || [];

  // const filterList = list.filter((item) => item.);

  useEffect(() => {
    console.log(trainingPeriod, closed)
  }, [trainingPeriod, closed]);

  return (
    <div className={styled.cardListContainer}>
      {
        list.map((item, index) => (
          <Card key={index} {...item} />
        ))
      }
    </div>
  );
};

export default CardList;